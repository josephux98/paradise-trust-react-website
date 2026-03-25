import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import aboutUsRealImg from '../assets/img/images/aboutusreal1.png'

// ─────────────────────────────────────────────────────────────
// WhyUs.jsx — "About Us / Why Us" section
// Matches the why-us section from paradisefamilytrust.org
//
// Left:  Image with floating stats badges + compassion card
// Right: Badge pill, heading, paragraph, 4 benefit items, 2 CTA buttons
// ─────────────────────────────────────────────────────────────

// ── Animated counter hook ─────────────────────────────────────
function useCounter(target, duration = 1500, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])
  return count
}

// ── Benefit items data ────────────────────────────────────────
const benefits = [
  {
    id: 1,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
      </svg>
    ),
    title: 'Elderly Care',
    desc: 'Providing shelter, food, emotional support, and healthcare through our old age home initiative "Snehakoodaram".',
  },
  {
    id: 2,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Medical Support',
    desc: 'Offering medical assistance and relief for people suffering from chronic illnesses and financial hardship.',
  },
  {
    id: 3,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Education & Learning',
    desc: 'Supporting students through education programs, training, libraries, and learning resources.',
  },
  {
    id: 4,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Community Empowerment',
    desc: 'Promoting women empowerment, self-help groups, and livelihood opportunities for marginalized communities.',
  },
]

// ── Main component ────────────────────────────────────────────
export default function WhyUs() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const countYears = useCounter(10,   1200, visible)
  const countLives = useCounter(1000, 1800, visible)

  return (
    <section style={S.section} ref={sectionRef}>
      <div style={S.container}>

        {/* ── Top Centered Content ──────────────── */}
        <div style={S.topCenteredContent}>
          <h2 style={S.sectionTitleH2}>About Us</h2>
          <p style={S.sectionTitleP}>Serving humanity with compassion and purpose</p>

          {/* Badge pill */}
          <div style={S.pill}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#0B1F3A" style={{flexShrink:0}}>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>Paradise Family &amp; Social Welfare Trust</span>
          </div>

          <h2 style={S.heading}>
            Building Hope, Restoring Dignity,{' '}
            <span style={{ color: '#0B1F3A' }}>Changing Lives</span>
          </h2>

          <p style={S.leadText}>
            Paradise Family &amp; Social Welfare Trust was founded in 2015 with the
            mission to serve the elderly, poor, and vulnerable without discrimination.
            Through elderly care, education, medical support, and community programs,
            we work to create a society where every individual lives with dignity,
            care, and hope.
          </p>
        </div>

        {/* ── Main row: content left, image right ─ */}
        <div style={S.mainRow} className="wu-main-row">

          {/* ── LEFT: Content ───────────────────── */}
          <div style={S.contentCol} className="wu-content-col">

            {/* Benefits grid — 2×2 */}
            <div style={S.benefitsGrid} className="wu-benefits-grid">
              {benefits.map((b, i) => (
                <div
                  key={b.id}
                  style={{
                    ...S.benefitItem,
                    animationDelay: `${i * 0.1}s`,
                  }}
                  className="wu-benefit-item"
                >
                  <div style={S.benefitIcon} className="wu-benefit-icon-inner">
                    <div className="wu-benefit-icon-svg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {b.icon}
                    </div>
                  </div>
                  <div style={S.benefitContent}>
                    <h4 style={S.benefitTitle}>{b.title}</h4>
                    <p style={S.benefitDesc}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div style={S.actionButtons}>
              <Link to="/about" style={S.btnPrimary} className="wu-btn-primary">
                Learn More About Us
              </Link>
              <Link to="/contact" style={S.btnOutline} className="wu-btn-outline">
                Support Our Mission
              </Link>
            </div>

          </div>

          {/* ── RIGHT: Image showcase ─────────────── */}
          <div style={S.imageCol} className="wu-image-col">
            <div style={S.imageShowcase}>

              {/* Main image */}
              <div style={S.mainImageWrapper}>
                <img
                  src={aboutUsRealImg}
                  alt="Paradise Family Trust work"
                  style={S.mainImage}
                />
              </div>

              {/* Floating stats badges */}
              <div style={S.floatingStats}>
                <div style={S.statBadge} className="wu-stat-badge-1">
                  <span style={S.statBadgeNumber}>{countYears}+</span>
                  <span style={S.statBadgeText}>Years of Service</span>
                  <span style={S.statBadgeSub}>Serving Since 2015</span>
                </div>
                <div style={S.statBadge} className="wu-stat-badge-2">
                  <span style={S.statBadgeNumber}>{countLives}+</span>
                  <span style={S.statBadgeText}>Lives Impacted</span>
                  <span style={S.statBadgeSub}>Across Kerala communities</span>
                </div>
              </div>

              {/* Experience card */}
              <div style={S.experienceCard}>
                <div style={S.expCardIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff4757" className="wu-heart-icon">
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                  </svg>
                </div>
                <div>
                  <div style={S.expCardTitle}>Compassion in Action</div>
                  <div style={S.expCardSub}>Serving those in need</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Hover + responsive styles */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.2); }
        }
        @keyframes floatAnim1 {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50%      { transform: translateY(-8px) rotate(-3deg); }
        }
        @keyframes floatAnim2 {
          0%, 100% { transform: translateY(0px) rotate(5deg); }
          50%      { transform: translateY(-8px) rotate(5deg); }
        }
        @keyframes iconPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.15) translateY(-3px); }
          100% { transform: scale(1); }
        }

        .wu-heart-icon {
          animation: heartbeat 1.5s infinite;
          transform-origin: center;
        }
        .wu-stat-badge-1 {
          animation: floatAnim1 4s ease-in-out infinite;
        }
        .wu-stat-badge-2 {
          animation: floatAnim2 4s ease-in-out infinite 2s;
        }

        .wu-benefit-item:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 12px 30px rgba(11,31,58,0.1) !important;
          border-color: #0B1F3A !important;
        }
        .wu-benefit-item:hover .wu-benefit-icon-inner {
          background: #0B1F3A !important;
          color: #fff !important;
        }
        .wu-benefit-item:hover .wu-benefit-icon-svg {
          animation: iconPop 0.4s ease-in-out;
        }

        .wu-btn-primary:hover {
          background: #071529 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(11,31,58,0.3) !important;
        }
        .wu-btn-outline:hover {
          background: #0B1F3A !important;
          color: #fff !important;
          transform: translateY(-2px);
        }

        /* Tablet */
        @media (max-width: 960px) {
          .wu-main-row    { flex-direction: column-reverse !important; }
          .wu-image-col   { width: 100% !important; max-width: 100% !important; }
          .wu-content-col { width: 100% !important; }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .wu-benefits-grid { grid-template-columns: 1fr !important; }
          .wu-action-buttons { flex-direction: column !important; }
        }
      `}</style>
    </section>
  )
}

// ── Styles ────────────────────────────────────────────────────
const S = {
  section: {
    background: '#F4F6F9',
    padding: '96px 24px',
  },

  container: {
    maxWidth: 1100,
    margin: '0 auto',
  },

  // ── Top Centered Content ────────────────
  topCenteredContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 64,
  },

  sectionTitleH2: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: 700,
    color: '#0B1F3A',
    marginBottom: 10,
  },

  sectionTitleP: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 1.6,
    marginBottom: 24,
  },

  // ── Main row ──────────────────────────────
  mainRow: {
    display: 'flex',
    gap: 72,
    alignItems: 'center',
  },

  // ── Left image col ────────────────────────
  imageCol: {
    width: '42%',
    flexShrink: 0,
  },

  imageShowcase: {
    position: 'relative',
  },

  mainImageWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
  },

  mainImage: {
    width: '100%',
    height: 480,
    objectFit: 'cover',
    display: 'block',
  },

  // Floating stats — bottom left of image
  floatingStats: {
    position: 'absolute',
    bottom: -24,
    left: -24,
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    zIndex: 2,
  },

  statBadge: {
    background: '#0B1F3A',
    borderRadius: 14,
    padding: '14px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    minWidth: 160,
    boxShadow: '0 8px 24px rgba(11,31,58,0.25)',
  },

  statBadgeNumber: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 26,
    fontWeight: 700,
    color: '#fff',
    lineHeight: 1,
  },

  statBadgeText: {
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 4,
  },

  statBadgeSub: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.5)',
    marginTop: 2,
  },

  // Experience card — top right of image
  experienceCard: {
    position: 'absolute',
    top: 24,
    right: -20,
    background: '#fff',
    borderRadius: 14,
    padding: '14px 18px',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    boxShadow: '0 8px 28px rgba(0,0,0,0.12)',
    zIndex: 2,
    maxWidth: 200,
  },

  expCardIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: '#FFEBEB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  expCardTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: '#0B1F3A',
    lineHeight: 1.3,
  },

  expCardSub: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 3,
  },

  // ── Right content col ─────────────────────
  contentCol: {
    flex: 1,
    minWidth: 0,
  },

  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: '#E8EDF5',
    color: '#0B1F3A',
    fontSize: 12,
    fontWeight: 700,
    padding: '6px 16px',
    borderRadius: 999,
    marginBottom: 20,
    letterSpacing: '0.3px',
  },

  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(24px, 3vw, 34px)',
    fontWeight: 700,
    color: '#0B1F3A',
    lineHeight: 1.25,
    marginBottom: 18,
  },

  leadText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 1.85,
    maxWidth: 800,
  },

  // Benefits 2×2 grid
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
    marginBottom: 40,
  },

  benefitItem: {
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start',
    padding: '18px 16px',
    background: '#fff',
    borderRadius: 14,
    border: '1.5px solid #E8EBF0',
    transition: 'transform 0.22s ease, box-shadow 0.22s ease',
  },

  benefitIcon: {
    width: 42,
    height: 42,
    borderRadius: 10,
    background: '#F0F4FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0B1F3A',
    flexShrink: 0,
    transition: 'background 0.22s ease, color 0.22s ease',
  },

  benefitContent: {
    flex: 1,
    minWidth: 0,
  },

  benefitTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 15,
    fontWeight: 700,
    color: '#0B1F3A',
    marginBottom: 6,
    lineHeight: 1.3,
  },

  benefitDesc: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 1.65,
  },

  // Action buttons
  actionButtons: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
  },

  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '13px 28px',
    borderRadius: 999,
    background: '#0B1F3A',
    color: '#fff',
    fontSize: 14,
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.22s ease',
    boxShadow: '0 4px 14px rgba(11,31,58,0.2)',
  },

  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '13px 28px',
    borderRadius: 999,
    background: 'transparent',
    color: '#0B1F3A',
    fontSize: 14,
    fontWeight: 600,
    textDecoration: 'none',
    border: '2px solid #0B1F3A',
    transition: 'all 0.22s ease',
  },
}
