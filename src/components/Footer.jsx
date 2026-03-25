import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────
// Footer.jsx — matches paradisefamilytrust.org exactly
//
// Layout (3 columns):
//   Col 1 (wide): Logo + description + newsletter form
//   Col 2:        Quick links
//   Col 3:        Get in touch (address, phone, email, socials)
//
// Bottom bar: copyright centred
// ─────────────────────────────────────────────────────────────

const quickLinks = [
  { to: '/about',    label: 'About Us'    },
  { to: '/services', label: 'Our Services' },
  { to: '/about',    label: 'Our Trustees', hash: '#trustees' },
  { to: '/contact',  label: 'Contact Us'  },
]

const contactInfo = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    text: 'Door No. D-21, Pvt. Bus Stand Building,\nSouth Chalakudy, Chalakudy P.O,\nThrissur District, Kerala – 680307',
    multiline: true,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
      </svg>
    ),
    text: '+91 9846547907',
    href: 'tel:+919846547907',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    text: 'paradisefamilytrust@gmail.com',
    href: 'mailto:paradisefamilytrust@gmail.com',
  },
]

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0B1F3A"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const [email,   setEmail]   = useState('')
  const [subSent, setSubSent] = useState(false)
  const [subErr,  setSubErr]  = useState(false)
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubscribe = e => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setSubErr(true)
      return
    }
    // TODO: wire to your newsletter handler / Mailchimp / EmailJS
    setSubSent(true)
    setSubErr(false)
    setEmail('')
  }

  return (
    <footer style={S.footer} className="footer-animated-bg">

      {/* ── BACKGROUND ANIMATED LINES ────────── */}
      <div className="bg-line"></div>
      <div className="bg-line"></div>
      <div className="bg-line"></div>
      <div className="bg-line"></div>

      {/* ── MAIN GRID ─────────────────────────── */}
      <div style={S.container}>
        <div style={S.grid} className="footer-grid">

          {/* ── Col 1: Logo + desc + newsletter ── */}
          <div style={S.col1}>

            {/* Logo */}
            <Link to="/" style={S.logoLink} className="footer-logo-text">
              Paradise Family <span style={{ color: '#68d391' }}>&amp;</span> Social Welfare Trust
            </Link>

            {/* Description */}
            <p style={S.desc}>
              Paradise Family &amp; Social Welfare Trust is a registered charitable
              organization serving the elderly, poor, and vulnerable since 2015.
              We work across elderly care, medical support, education, and community
              welfare to create a compassionate and inclusive society.
            </p>

            {/* Newsletter */}
            <div style={S.newsletter}>
              <h5 style={S.newsletterTitle}>Stay Connected</h5>
              {subSent ? (
                <div className="success-container">
                  <div className="success-icon-wrap">
                    <svg className="success-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#68d391" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="success-thumb">👍</span>
                    <span className="success-popper-l">🎉</span>
                    <span className="success-popper-r">🎉</span>
                  </div>
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={S.newsletterForm}>
                  <div style={S.inputGroup}>
                    <input
                      type="email"
                      value={email}
                      onChange={e => { setEmail(e.target.value); setSubErr(false) }}
                      placeholder="Enter your email to receive updates"
                      style={{
                        ...S.emailInput,
                        borderColor: subErr ? '#e53e3e' : 'rgba(255,255,255,0.15)',
                      }}
                      required
                    />
                    <button
                      type="submit"
                      style={S.subBtn}
                      className="footer-sub-btn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </button>
                  </div>
                  {subErr && (
                    <p style={{ fontSize: 12, color: '#fc8181', marginTop: 6 }}>
                      Please enter a valid email address.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* ── Col 2: Quick links ─────────────── */}
          <div style={S.col2}>
            <h4 style={S.colTitle}>Quick Links</h4>
            <ul style={S.linkList}>
              {quickLinks.map(l => (
                <li key={l.label} style={S.linkItem}>
                  <Link
                    to={l.to + (l.hash || '')}
                    style={S.footerLink}
                    className="footer-link"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{flexShrink:0}}>
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact details ─────────── */}
          <div style={S.col3}>
            <h4 style={S.colTitle}>Get in Touch</h4>

            {contactInfo.map((c, i) => (
              <div key={i} style={S.contactItem}>
                <div style={S.contactIcon}>{c.icon}</div>
                <div style={S.contactText}>
                  {c.href ? (
                    <a href={c.href} style={S.contactLink} className="footer-link">
                      {c.text}
                    </a>
                  ) : (
                    <p style={S.contactP}>
                      {c.multiline
                        ? c.text.split('\n').map((line, j) => (
                            <span key={j} style={{ display: 'block' }}>{line}</span>
                          ))
                        : c.text
                      }
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social icons */}
            <div style={S.socials}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  style={S.socialBtn}
                  className="footer-social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────── */}
      <div style={S.bottomBar}>
        <div style={S.bottomInner}>
          <p style={S.copyright}>
            © 2015–{new Date().getFullYear()}{' '}
            <strong style={{ color: '#fff' }}>
              Paradise Family &amp; Social Welfare Trust
            </strong>
            . All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ── SCROLL TO TOP BUTTON ────────────── */}
      <button
        onClick={scrollToTop}
        className={`footer-scroll-top ${showTopBtn ? 'show' : ''}`}
        aria-label="Scroll to top"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      {/* Hover styles */}
      <style>{`
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .footer-animated-bg {
          background: linear-gradient(-45deg, #071529, #0B1F3A, #1a3a6b, #0B1F3A) !important;
          background-size: 400% 400% !important;
          animation: gradient-bg 15s ease infinite;
        }
        
        @keyframes line-slide {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .bg-line {
          position: absolute; top: 0; bottom: 0; width: 1px;
          background: rgba(255, 255, 255, 0.05); overflow: hidden; z-index: 0;
        }
        .bg-line::after {
          content: ''; display: block; position: absolute; height: 15vh; width: 100%; top: -50%; left: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0) 100%);
          animation: line-slide 7s 0s infinite forwards;
        }
        .bg-line:nth-child(1) { left: 20%; animation-delay: 0s; }
        .bg-line:nth-child(2) { left: 40%; } .bg-line:nth-child(2)::after { animation-delay: 2.5s; }
        .bg-line:nth-child(3) { left: 60%; } .bg-line:nth-child(3)::after { animation-delay: 4.5s; }
        .bg-line:nth-child(4) { left: 80%; } .bg-line:nth-child(4)::after { animation-delay: 1.5s; }

        .footer-link:hover {
          color: #fff !important;
          padding-left: 6px !important;
        }
        .footer-social-btn:hover {
          background: #fff !important;
          color: #0B1F3A !important;
          transform: translateY(-3px);
          box-shadow: 0 4px 14px rgba(0,0,0,0.2) !important;
        }
        .footer-sub-btn:hover {
          background: #1a3a6b !important;
        }
        input[type="email"]::placeholder {
          color: rgba(255,255,255,0.35);
          font-size: 13px;
        }
        input[type="email"]:focus {
          outline: none;
          border-color: rgba(255,255,255,0.5) !important;
        }

        .footer-scroll-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #0B1F3A;
          color: #fff;
          border: 2px solid #DDE5F5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          z-index: 999;
        }
        .footer-scroll-top.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .footer-scroll-top:hover {
          background: #1a3a6b;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(11,31,58,0.3);
          border-color: #fff;
        }

        @keyframes checkDraw {
          0% { stroke-dasharray: 50; stroke-dashoffset: 50; }
          100% { stroke-dasharray: 50; stroke-dashoffset: 0; }
        }
        @keyframes thumbPop {
          0% { transform: scale(0) rotate(-20deg); opacity: 0; }
          20% { transform: scale(1.4) rotate(10deg); opacity: 1; }
          40% { transform: scale(1) rotate(0deg); opacity: 1; }
          80% { transform: scale(1) rotate(0deg); opacity: 1; }
          100% { transform: scale(0.5) translateY(-20px); opacity: 0; }
        }
        @keyframes popperLeft {
          0% { transform: translate(0px, 0px) scaleX(-1) scale(0); opacity: 0; }
          30% { transform: translate(-25px, -15px) scaleX(-1) scale(1.2); opacity: 1; }
          70% { transform: translate(-30px, -20px) scaleX(-1) scale(1); opacity: 1; }
          100% { transform: translate(-35px, -25px) scaleX(-1) scale(0.5); opacity: 0; }
        }
        @keyframes popperRight {
          0% { transform: translate(0px, 0px) scale(0); opacity: 0; }
          30% { transform: translate(25px, -15px) scale(1.2); opacity: 1; }
          70% { transform: translate(30px, -20px) scale(1); opacity: 1; }
          100% { transform: translate(35px, -25px) scale(0.5); opacity: 0; }
        }
        @keyframes successFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .success-container {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #68d391;
          padding: 10px 0;
          animation: successFade 0.4s ease forwards;
        }
        .success-icon-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }
        .success-check {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: checkDraw 0.5s ease 0.1s forwards;
        }
        .success-thumb {
          position: absolute;
          font-size: 18px;
          opacity: 0;
          animation: thumbPop 1.5s ease 0.6s forwards;
          z-index: 2;
        }
        .success-popper-l {
          position: absolute;
          font-size: 16px;
          opacity: 0;
          animation: popperLeft 1s ease 0.2s forwards;
        }
        .success-popper-r {
          position: absolute;
          font-size: 16px;
          opacity: 0;
          animation: popperRight 1s ease 0.3s forwards;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-scroll-top {
            bottom: 24px;
            right: 24px;
            width: 44px;
            height: 44px;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

// ── Styles ────────────────────────────────────────────────────
const S = {
  footer: {
    position: 'relative',
    overflow: 'hidden',
    background: '#0B1F3A',
    color: 'rgba(255,255,255,0.65)',
    fontFamily: "'Inter', system-ui, sans-serif",
  },

  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 1100,
    margin: '0 auto',
    padding: '72px 24px 48px',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1.4fr',
    gap: 56,
  },

  // ── Col 1 ─────────────────────────────────
  col1: {},

  logoLink: {
    display: 'inline-block',
    marginBottom: 20,
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(22px, 3vw, 28px)',
    fontWeight: 700,
    color: '#ffffff',
    textDecoration: 'none',
    lineHeight: 1.3,
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },

  desc: {
    fontSize: 14,
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 28,
    maxWidth: 380,
  },

  // Newsletter
  newsletter: {},

  newsletterTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 12,
  },

  newsletterForm: {},

  inputGroup: {
    display: 'flex',
    gap: 0,
  },

  emailInput: {
    flex: 1,
    padding: '11px 14px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRight: 'none',
    borderRadius: '8px 0 0 8px',
    color: '#fff',
    fontSize: 13,
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  },

  subBtn: {
    padding: '11px 16px',
    background: '#1a3a6b',
    border: 'none',
    borderRadius: '0 8px 8px 0',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Col 2 ─────────────────────────────────
  col2: {},

  colTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 20,
    paddingBottom: 12,
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },

  linkList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },

  linkItem: {},

  footerLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    padding: '6px 0',
    transition: 'color 0.2s, padding-left 0.2s',
  },

  // ── Col 3 ─────────────────────────────────
  col3: {},

  contactItem: {
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  contactIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: 'rgba(255,255,255,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.7)',
    flexShrink: 0,
    marginTop: 2,
  },

  contactText: {
    flex: 1,
  },

  contactLink: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    transition: 'color 0.2s',
    lineHeight: 1.6,
  },

  contactP: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.7,
  },

  // Social icons row
  socials: {
    display: 'flex',
    gap: 10,
    marginTop: 8,
  },

  socialBtn: {
    width: 38,
    height: 38,
    borderRadius: 8,
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    transition: 'background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s',
  },

  // ── Bottom bar ────────────────────────────
  bottomBar: {
    position: 'relative',
    zIndex: 1,
    borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '20px 24px',
  },

  bottomInner: {
    maxWidth: 1100,
    margin: '0 auto',
    textAlign: 'center',
  },

  copyright: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.45)',
  },
}
