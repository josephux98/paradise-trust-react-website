import crypto from 'node:crypto'
import express from 'express'
import dotenv from 'dotenv'
import Razorpay from 'razorpay'

dotenv.config()

const app = express()
const port = Number(process.env.PAYMENT_SERVER_PORT || 8787)
const keyId = process.env.RAZORPAY_KEY_ID
const keySecret = process.env.RAZORPAY_KEY_SECRET
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean)

if (!keyId || !keySecret) {
  console.warn('Razorpay keys are missing. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in your .env file.')
}

const razorpay = new Razorpay({
  key_id: keyId || '',
  key_secret: keySecret || '',
})

app.use(express.json())
app.use((req, res, next) => {
  const origin = req.headers.origin

  if (origin && allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Vary', 'Origin')
  }

  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204)
  }

  next()
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/payments/create-order', async (req, res) => {
  try {
    if (!keyId || !keySecret) {
      return res.status(500).json({ error: 'Payment server is not configured.' })
    }

    const {
      amount,
      firstName = '',
      lastName = '',
      email = '',
      phone = '',
    } = req.body ?? {}

    const amountInRupees = Number(amount)

    if (!Number.isFinite(amountInRupees) || amountInRupees < 1) {
      return res.status(400).json({ error: 'Please enter a valid donation amount.' })
    }

    const normalizedPhone = String(phone).trim()

    if (normalizedPhone && !/^[0-9+\-\s()]{8,20}$/.test(normalizedPhone)) {
      return res.status(400).json({ error: 'Please enter a valid phone number.' })
    }

    const normalizedEmail = String(email).trim()

    if (!normalizedEmail || !/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' })
    }

    const fullName = `${String(firstName).trim()} ${String(lastName).trim()}`.trim()

    if (!fullName) {
      return res.status(400).json({ error: 'Please enter your full name.' })
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amountInRupees * 100),
      currency: 'INR',
      receipt: `donation_${Date.now()}`,
      notes: {
        donor_name: fullName,
        donor_email: normalizedEmail,
        donor_phone: normalizedPhone,
      },
    })

    return res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
      donor: {
        name: fullName,
        email: normalizedEmail,
        phone: normalizedPhone,
      },
    })
  } catch (error) {
    console.error('Create order failed:', error)
    return res.status(500).json({ error: 'Unable to create the Razorpay order.' })
  }
})

app.post('/api/payments/verify', async (req, res) => {
  try {
    if (!keySecret) {
      return res.status(500).json({ error: 'Payment server is not configured.' })
    }

    const {
      razorpay_order_id: orderId,
      razorpay_payment_id: paymentId,
      razorpay_signature: signature,
    } = req.body ?? {}

    if (!orderId || !paymentId || !signature) {
      return res.status(400).json({ error: 'Missing Razorpay payment verification fields.' })
    }

    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${orderId}|${paymentId}`)
      .digest('hex')

    const actualBuffer = Buffer.from(signature)
    const expectedBuffer = Buffer.from(expectedSignature)

    if (
      actualBuffer.length !== expectedBuffer.length ||
      !crypto.timingSafeEqual(actualBuffer, expectedBuffer)
    ) {
      return res.status(400).json({ error: 'Invalid Razorpay signature.' })
    }

    const payment = await razorpay.payments.fetch(paymentId)

    if (payment.order_id !== orderId) {
      return res.status(400).json({ error: 'Payment order mismatch.' })
    }

    return res.json({
      verified: true,
      paymentId,
      orderId,
      status: payment.status,
      amount: payment.amount,
      email: payment.email,
      contact: payment.contact,
      method: payment.method,
    })
  } catch (error) {
    console.error('Payment verification failed:', error)
    return res.status(500).json({ error: 'Unable to verify the Razorpay payment.' })
  }
})

app.listen(port, () => {
  console.log(`Payment server listening on http://localhost:${port}`)
})
