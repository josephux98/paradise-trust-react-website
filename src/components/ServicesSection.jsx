import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../assets/img/images/aboutus.png'

// ─────────────────────────────────────────────────────────────
// HomeAbout.jsx
// Matches the home-about section from paradisefamilytrust.org
// - Image left, content right
// - Animated counters (counts up when scrolled into view)
// - 4 service cards below
// - CTA button + contact link
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

// ── Service card data ─────────────────────────────────────────
const services = [
  {
    id: 1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        <path d="M9 12 Q12 8 15 12" fill="rgba(11,31,58,0.08)"/>
      </svg>
    ),
    title: 'Old Age Home & Elderly Support',
    desc: 'Providing shelter, care, and companionship to the elderly in need.',
  },
  {
    id: 2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Medical Aid for the Poor',
    desc: 'Ensuring access to essential healthcare and medicines for the underprivileged.',
  },
  {
    id: 3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Education & Skill Development',
    desc: 'Empowering youth through education and vocational training for a better future.',
  },
  {
    id: 4,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Women & Community Empowerment',
    desc: 'Supporting women and communities to build sustainable livelihoods and dignity.',
  },
]

// ── Main component ────────────────────────────────────────────
export default function HomeAbout() {
  // Intersection observer — starts counters when section scrolls into view
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const countYear  = useCounter(2015, 2000, visible)
  const countBoard = useCounter(7,    1000, visible)
  const countTrans = useCounter(100,  1200, visible)

  return (
    <section style={S.section} ref={sectionRef}>
      <div style={S.container}>

        {/* ── TOP ROW: Image + Content ──────────── */}
        <div style={S.topRow} className="ha-top-row">

          {/* Left — image */}
          <div style={S.imageCol} className="ha-image-col">
            <div style={S.imageWrapper}>
              <img
                src={aboutImg}
                alt="About Paradise Family Trust"
                style={S.mainImage}
              />
              {/* Decorative badge on image */}
              <div style={S.imageBadge}>
                <span style={S.badgeIcon}>❤️</span>
                <div>
                  <div style={S.badgeTitle}>Compassion in Action</div>
                  <div style={S.badgeSub}>Serving those in need</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div style={S.contentCol} className="ha-content-col">

            {/* Badge pill */}
            <div style={S.sectionBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0B1F3A" style={{flexShrink:0}}>
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
              </svg>
              <span>Our Core Services</span>
            </div>

            <h2 style={S.heading}>
              Serving Lives With<br />
              <span style={{ color: '#0B1F3A' }}>Compassion and Dignity</span>
            </h2>

            <p style={S.paragraph}>
              Paradise Family &amp; Social Welfare Trust works across elderly care,
              education, healthcare, and community support. Every program is designed
              to restore hope, protect dignity, and create lasting change for those in need.
            </p>

            {/* Animated stats */}
            <div style={S.statsGrid} className="ha-stats-grid">
              <div style={S.statItem} className="ha-stat-card">
                <div style={S.statNumber}>{countYear}</div>
                <div style={S.statLabel}>Since Serving</div>
              </div>
              <div style={S.statItem} className="ha-stat-card">
                <div style={S.statNumber}>{countBoard}+</div>
                <div style={S.statLabel}>Trustees</div>
              </div>
              <div style={S.statItem} className="ha-stat-card">
                <div style={S.statNumber}>{countTrans}%</div>
                <div style={S.statLabel}>Transparency</div>
              </div>
            </div>

          </div>
        </div>

        {/* ── SERVICE CARDS GRID ────────────────── */}
        <div style={S.cardsGrid} className="ha-cards-grid">
          {services.map((s, i) => (
            <div
              key={s.id}
              style={{
                ...S.serviceCard,
                animationDelay: `${i * 0.1}s`,
              }}
              className="ha-service-card"
            >
              <div style={S.cardIconWrap} className="ha-card-icon">
                {s.icon}
              </div>
              <h3 style={S.cardTitle}>{s.title}</h3>
              <p style={S.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* ── CTA ROW ──────────────────────────── */}
        <div style={S.ctaRow}>
          <Link to="/services" style={S.ctaBtn} className="ha-cta-btn">
            <span>Explore Our Services</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>

          <div style={S.contactQuick}>
            <div style={S.contactIconWrap}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
              </svg>
            </div>
            <div>
              <span style={S.contactNeed}>Need help?</span>
              <Link to="/contact" style={S.contactLink}>Contact our trust team</Link>
            </div>
          </div>
        </div>

      </div>

      {/* Hover effect for service cards */}
      <style>{`
        @keyframes iconPop {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.15); }
          100% { transform: translateY(0) scale(1); }
        }
        .ha-service-card:hover .ha-card-icon svg {
          animation: iconPop 0.4s ease-in-out;
        }

        .ha-stat-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 12px 30px rgba(11, 31, 58, 0.1) !important;
          border-color: #0B1F3A !important;
        }
        .ha-service-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12) !important;
          border-color: #0B1F3A !important;
        }
        .ha-cta-btn:hover {
          background: #071529 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(11,31,58,0.3) !important;
        }
        .ha-cta-btn:hover svg { transform: translateX(4px); }
        .ha-cta-btn svg { transition: transform 0.2s ease; }

        /* Responsive */
        @media (max-width: 900px) {
          .ha-top-row    { flex-direction: column !important; }
          .ha-image-col  { width: 100% !important; }
          .ha-content-col{ width: 100% !important; }
          .ha-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .ha-cards-grid { grid-template-columns: 1fr !important; }
          .ha-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

// ── Styles ────────────────────────────────────────────────────
const S = {
  section: {
    background: '#ffffff',
    padding: '96px 24px',
  },

  container: {
    maxWidth: 1100,
    margin: '0 auto',
  },

  // ── Top row ───────────────────────────────
  topRow: {
    display: 'flex',
    gap: 64,
    alignItems: 'center',
    marginBottom: 72,
  },

  imageCol: {
    width: '45%',
    flexShrink: 0,
  },

  imageWrapper: {
    position: 'relative',
    borderRadius: 20,
    overflow: 'visible',
  },

  mainImage: {
    width: '100%',
    height: 420,
    objectFit: 'cover',
    borderRadius: 20,
    display: 'block',
    boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
  },

  imageBadge: {
    position: 'absolute',
    bottom: -20,
    right: -20,
    background: '#fff',
    borderRadius: 14,
    padding: '14px 18px',
    boxShadow: '0 8px 28px rgba(0,0,0,0.12)',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    zIndex: 2,
  },

  badgeIcon: {
    fontSize: 28,
  },

  badgeTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: '#0B1F3A',
  },

  badgeSub: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 2,
  },

  contentCol: {
    flex: 1,
    minWidth: 0,
  },

  sectionBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: '#F0F4FF',
    color: '#0B1F3A',
    fontSize: 12,
    fontWeight: 700,
    padding: '6px 16px',
    borderRadius: 999,
    marginBottom: 20,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },

  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(26px, 3vw, 36px)',
    fontWeight: 700,
    color: '#0B1F3A',
    lineHeight: 1.2,
    marginBottom: 18,
  },

  paragraph: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 1.8,
    marginBottom: 36,
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
  },

  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '24px 16px',
    background: '#fff',
    border: '1px solid #ebebeb',
    borderRadius: 16,
    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
  },

  statNumber: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 32,
    fontWeight: 700,
    color: '#0B1F3A',
    lineHeight: 1,
  },

  statLabel: {
    fontSize: 13,
    color: '#9CA3AF',
    fontWeight: 500,
  },

  // ── Service cards ─────────────────────────
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 20,
    marginBottom: 56,
  },

  serviceCard: {
    background: '#fff',
    border: '1px solid #ebebeb',
    borderRadius: 16,
    padding: '28px 22px',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },

  cardIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 12,
    background: '#F0F4FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0B1F3A',
    marginBottom: 16,
  },

  cardTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 16,
    fontWeight: 700,
    color: '#0B1F3A',
    marginBottom: 10,
    lineHeight: 1.3,
  },

  cardDesc: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 1.7,
  },

  // ── CTA row ───────────────────────────────
  ctaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 32px',
    borderRadius: 999,
    background: '#0B1F3A',
    color: '#fff',
    fontSize: 15,
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.25s ease',
    boxShadow: '0 4px 14px rgba(11,31,58,0.2)',
  },

  contactQuick: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },

  contactIconWrap: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: '#F0F4FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  contactNeed: {
    display: 'block',
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 2,
  },

  contactLink: {
    display: 'block',
    fontSize: 14,
    fontWeight: 600,
    color: '#0B1F3A',
    textDecoration: 'none',
  },
}
