import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/img/images/Hero01.png'
import secondaryImg from '../assets/img/images/secondary_img.png'

export default function Hero() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', amount: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeAmt, setActiveAmt] = useState('')

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const pickAmt = val => {
    setActiveAmt(val)
    setForm(f => ({ ...f, amount: val }))
  }

  const submit = e => {
    e.preventDefault()
    // TODO: connect Razorpay here
    setSubmitted(true)
  }

  return (
    <>
      <section style={S.section} className="hero-animated-bg">
        {/* ── BACKGROUND ANIMATED VERTICAL LINES ────────── */}
        <div className="hero-bg-line v-line-1"></div>
        <div className="hero-bg-line v-line-2"></div>
        <div className="hero-bg-line v-line-3"></div>
        <div className="hero-bg-line v-line-4"></div>
        <div className="hero-bg-line v-line-5"></div>
        <div className="hero-bg-line v-line-6"></div>

        {/* ── BACKGROUND ANIMATED HORIZONTAL LINES ──────── */}
        <div className="hero-bg-line-h h-line-1"></div>
        <div className="hero-bg-line-h h-line-2"></div>
        <div className="hero-bg-line-h h-line-3"></div>
        <div className="hero-bg-line-h h-line-4"></div>
        <div className="hero-bg-line-h h-line-5"></div>
        <div className="hero-bg-line-h h-line-6"></div>

        <div style={S.container} className="container hero-container">
          {/* ── LEFT: Text & Form ───────────────────────── */}
          <div style={S.leftCol} className="hero-left-col">
            <h1 style={S.headline} className="hero-headline">
              Caring for Lives.<br />Creating Hope.
            </h1>
            <p style={S.subtext}>
              Paradise Family &amp; Social Welfare Trust supports the elderly,
              poor, and vulnerable through care, education, and medical aid.
              Your donation helps us bring dignity, comfort, and hope to those
              who need it most.
            </p>

            <div style={S.formCard} className="donation-box">
              <h3 style={S.formTitle}>Make a Donation</h3>
              <p style={S.formDesc}>
                Support our mission to care for the elderly, heal the sick,
                and educate the needy.
              </p>
              <p style={S.formTagline}>Your small help can change a life today.</p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 44, marginBottom: 12 }}>🙏</div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#0A1628', marginBottom: 8 }}>
                    Thank you!
                  </h4>
                  <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 20 }}>
                    We will be in touch with you soon.
                  </p>
                  <button className="hero-donate-btn" style={S.btnDonate} onClick={() => { setSubmitted(false); setActiveAmt('') }}>
                    Donate Again
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <input style={S.input} type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handle} required />
                    <input style={S.input} type="text" name="lastName"  placeholder="Last Name"  value={form.lastName}  onChange={handle} required />
                  </div>
                  <input style={{ ...S.input, width: '100%' }} type="email"  name="email"  placeholder="Email Address"      value={form.email}  onChange={handle} required />
                  <input style={{ ...S.input, width: '100%' }} type="tel"    name="phone"  placeholder="Phone Number"        value={form.phone}  onChange={handle} />
                  <input style={{ ...S.input, width: '100%' }} type="number" name="amount" placeholder="Donation Amount (₹)" value={form.amount} onChange={handle} required min="1" />

                  {/* Quick amount pills */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {['100', '500', '1000', '5000'].map(amt => (
                      <button
                        key={amt} type="button"
                        style={{ ...S.quickBtn, ...(activeAmt === amt ? S.quickBtnActive : {}) }}
                        onClick={() => pickAmt(amt)}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>

                  <button type="submit" className="hero-donate-btn" style={S.btnDonate}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="donate-icon">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span>Donate Now</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT: Image Stack ───────────────── */}
          <div style={S.rightCol} className="hero-right-col">
            <div style={S.imageStack} className="hero-image-stack">
              
              <div style={S.mainImageWrap} className="hero-main-img-wrap">
                <img
                  src={heroImg}
                  alt="Luxury Property"
                  style={S.mainImg}
                />
              </div>

              <div style={S.propertyTag} className="hero-property-tag">
                <span style={S.tagPrice}>Since 2015</span>
                <span style={S.tagType}>Serving the Vulnerable</span>
              </div>

              <div style={S.secondaryImageWrap} className="hero-secondary-img-wrap">
                <img
                  src={secondaryImg}
                  alt="Property Interior"
                  style={S.secondaryImg}
                />
              </div>

              <div style={S.floatingCard} className="hero-floating-card">
                <div style={S.commitTitle}>Our Commitment</div>
                <div style={S.commitDesc}>Care • Education • Medical Support</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} style={{ color: '#F5A623', fontSize: 11 }}>{s}</span>
                  ))}
                  <span style={S.commitRating}>4.9 (127 reviews)</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────── */}
      <div style={S.divider} />

      {/* Responsive CSS */}
      <style>{`
        /* Focus states */
        input:focus { outline: none; border-color: #1B3A6B !important; box-shadow: 0 0 0 3px rgba(27,58,107,0.12) !important; }
        
        @keyframes hero-heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
        }

        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-animated-bg {
          background: linear-gradient(-45deg, #D9E8FC, #FFEBEE, #E5ECF6, #F4F6F9, #FFF2F5);
          background-size: 400% 400%;
          animation: gradient-bg 15s ease infinite;
        }

        .hero-donate-btn {
          position: relative;
          overflow: hidden;
        }
        .hero-donate-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          transition: all 0.75s ease;
        }
        .hero-donate-btn:hover {
          background-color: #071529 !important;
          box-shadow: 0 6px 18px rgba(11, 31, 58, 0.3), 0 0 10px rgba(255, 71, 87, 0.2) !important;
          transform: translateY(-2px);
        }
        .hero-donate-btn:hover::after {
          left: 125%;
          transition: all 0.75s ease;
        }
        .hero-donate-btn:hover .donate-icon {
          animation: hero-heartbeat 1.5s ease-in-out infinite;
          fill: #ff4757;
          stroke: #ff4757;
        }
        .donate-icon {
          transition: all 0.3s ease;
        }

        /* Vertical Lines */
        @keyframes hero-line-slide {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .hero-bg-line {
          position: absolute; top: 0; bottom: 0; width: 1px;
          background: rgba(11, 31, 58, 0.05); overflow: hidden; z-index: 0;
        }
        .hero-bg-line::after {
          content: ''; display: block; position: absolute; height: 15vh; width: 100%; top: -50%; left: 0;
          background: linear-gradient(to bottom, rgba(11,31,58,0) 0%, rgba(11,31,58,0.2) 75%, rgba(11,31,58,0) 100%);
          animation: hero-line-slide 7s 0s infinite forwards;
        }
        .v-line-1 { left: 15%; } .v-line-1::after { animation-delay: 0s; }
        .v-line-2 { left: 30%; } .v-line-2::after { animation-delay: 2.5s; }
        .v-line-3 { left: 45%; } .v-line-3::after { animation-delay: 5s; }
        .v-line-4 { left: 60%; } .v-line-4::after { animation-delay: 1.5s; }
        .v-line-5 { left: 75%; } .v-line-5::after { animation-delay: 4.5s; }
        .v-line-6 { left: 90%; } .v-line-6::after { animation-delay: 3s; }

        /* Horizontal Lines */
        @keyframes hero-line-slide-h {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        .hero-bg-line-h {
          position: absolute; left: 0; right: 0; height: 1px;
          background: rgba(11, 31, 58, 0.05); overflow: hidden; z-index: 0;
        }
        .hero-bg-line-h::after {
          content: ''; display: block; position: absolute; width: 15vw; height: 100%; left: -50%; top: 0;
          background: linear-gradient(to right, rgba(11,31,58,0) 0%, rgba(11,31,58,0.2) 75%, rgba(11,31,58,0) 100%);
          animation: hero-line-slide-h 8s 0s infinite forwards;
        }
        .h-line-1 { top: 15%; } .h-line-1::after { animation-delay: 1s; }
        .h-line-2 { top: 30%; } .h-line-2::after { animation-delay: 3.5s; }
        .h-line-3 { top: 45%; } .h-line-3::after { animation-delay: 6s; }
        .h-line-4 { top: 60%; } .h-line-4::after { animation-delay: 2.5s; }
        .h-line-5 { top: 75%; } .h-line-5::after { animation-delay: 5.5s; }
        .h-line-6 { top: 90%; } .h-line-6::after { animation-delay: 4s; }

        /* ── DESKTOP: side by side (text+form | image stack) ── */
        .hero-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 80px;
        }

        /* ── TABLET & MOBILE (max 900px): stack vertically ── */
        @media (max-width: 900px) {
          .hero-container {
            flex-direction: column;
            gap: 60px;
          }
          .hero-left-col, .hero-right-col {
            flex: 1 1 auto !important;
            max-width: 100% !important;
            width: 100%;
          }
          .hero-image-stack {
            max-width: 600px;
            margin: 0 auto;
          }
          .hero-property-tag {
            right: 0px !important;
          }
        }

        /* ── MOBILE (max 600px): further sizing adjustments ── */
        @media (max-width: 600px) {
          .hero-container { gap: 40px !important; }
          .hero-headline  { font-size: 32px !important; }
          .hero-image-stack { min-height: 420px !important; }
          .hero-secondary-img-wrap { height: 160px !important; width: 50% !important; border-width: 6px !important; top: -15px !important; left: -10px !important; }
          .hero-property-tag {
            top: -10px !important;
            right: -10px !important;
            padding: 12px 16px !important;
            transform: scale(0.9);
            transform-origin: top right;
          }
          .hero-floating-card {
            bottom: -20px !important;
            left: 0px !important;
            padding: 12px 16px !important;
            transform: scale(0.85);
            transform-origin: bottom left;
          }
        }
      `}</style>
    </>
  )
}

const S = {
  section: {
    paddingTop: 'calc(100px + 2rem)', // Top of nav + 2rem offset 
    paddingBottom: 72,
    position: 'relative',
    overflow: 'hidden',
  },

  container: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },

  // ── LEFT COLUMN ──────────────────────────
  leftCol: {
    flex: '0 0 42%',
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },

  headline: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(32px, 4.5vw, 52px)',
    fontWeight: 700,
    color: '#0A1628',
    lineHeight: 1.15,
  },

  subtext: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 1.8,
  },

  // ── FORM (Left Column) ────────────────────
  formCard: {
    background: '#fff',
    borderRadius: 16,
    padding: '28px 26px 32px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    border: '1px solid #E2E8F0',
  },

  formTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 21,
    fontWeight: 700,
    color: '#0A1628',
    marginBottom: 8,
  },

  formDesc: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 1.6,
    marginBottom: 4,
  },

  formTagline: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 18,
    fontStyle: 'italic',
  },

  input: {
    flex: 1,
    padding: '11px 13px',
    borderRadius: 8,
    border: '1.5px solid #E2E8F0',
    fontSize: 14,
    fontFamily: 'inherit',
    color: '#0A1628',
    background: '#F9FAFB',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    minWidth: 0,
  },

  quickBtn: {
    padding: '6px 14px',
    borderRadius: 999,
    border: '1.5px solid #E2E8F0',
    background: '#fff',
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
    color: '#4B5563',
    fontFamily: 'inherit',
    transition: 'all 0.18s',
  },

  quickBtnActive: {
    background: '#0A1628',
    color: '#fff',
    borderColor: '#0A1628',
  },

  btnDonate: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    padding: '12px 28px',
    borderRadius: 999, // Pill shape
    background: '#0B1F3A',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "'Inter', 'Poppins', sans-serif",
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(11, 31, 58, 0.15)',
    marginTop: 4,
  },

  // ── RIGHT COLUMN (Image Stack) ────────────
  rightCol: {
    flex: '0 0 50%',
    position: 'relative',
  },

  imageStack: {
    position: 'relative',
    width: '100%',
    minHeight: 680,
  },

  mainImageWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 48,
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
  },

  mainImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },

  propertyTag: {
    position: 'absolute',
    top: 32,
    right: -24,
    background: '#fff',
    padding: '14px 24px',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
    zIndex: 3,
    whiteSpace: 'nowrap',
  },

  tagPrice: {
    fontSize: 16,
    fontWeight: 700,
    color: '#0A1628',
  },

  tagType: {
    fontSize: 11,
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: 600,
  },

  secondaryImageWrap: {
    position: 'absolute',
    top: -40,
    left: -20,
    width: '45%',
    height: 240,
    borderRadius: 24,
    overflow: 'hidden',
    border: '10px solid #F4F6F9',
    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
    zIndex: 2,
  },

  secondaryImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },

  floatingCard: {
    position: 'absolute',
    bottom: -36,
    left: 40,
    background: '#fff',
    borderRadius: 16,
    padding: '14px 24px',
    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    whiteSpace: 'nowrap',
  },

  commitTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: '#0A1628',
  },

  commitDesc: {
    fontSize: 11,
    color: '#4B5563',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: 600,
  },

  commitRating: {
    fontSize: 11,
    color: '#6B7280',
    marginLeft: 4,
    fontWeight: 600,
  },

  // ── DIVIDER ──────────────────────────────
  divider: {
    height: 1,
    background: '#E8EBF0',
    margin: '0 auto',
    maxWidth: 1200,
    padding: '0 24px',
  },
}
