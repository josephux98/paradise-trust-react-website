const DEFAULT_API_BASE_URL = import.meta.env.VITE_PAYMENT_API_BASE_URL || ''

function getApiUrl(path) {
  return `${DEFAULT_API_BASE_URL}${path}`
}

export async function createDonationOrder(payload) {
  let response

  try {
    response = await fetch(getApiUrl('/api/payments/create-order'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error('Payment server is not reachable. Start it with "npm run server" and make sure it is using port 8787.')
  }

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.error || 'Unable to create payment order.')
  }

  return data
}

export async function verifyDonationPayment(payload) {
  let response

  try {
    response = await fetch(getApiUrl('/api/payments/verify'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error('Payment verification server is not reachable. Start it with "npm run server" and try again.')
  }

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.error || 'Unable to verify payment.')
  }

  return data
}

export function loadRazorpayCheckout() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Razorpay Checkout can only run in the browser.'))
  }

  if (window.Razorpay) {
    return Promise.resolve(window.Razorpay)
  }

  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-razorpay-checkout="true"]')

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.Razorpay), { once: true })
      existingScript.addEventListener('error', () => reject(new Error('Unable to load Razorpay Checkout.')), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.dataset.razorpayCheckout = 'true'
    script.onload = () => resolve(window.Razorpay)
    script.onerror = () => reject(new Error('Unable to load Razorpay Checkout.'))
    document.body.appendChild(script)
  })
}
