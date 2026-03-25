import { useEffect, useRef, useState } from 'react'
import agent1 from '../assets/img/images/agent-1.jpeg'
import about1 from '../assets/img/images/Aboutuspage01.png'
import about2 from '../assets/img/images/Aboutuspage02.png'

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

export default function AboutStory() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  // Start animations when the achievements grid scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const countInitiatives = useCounter(25, 1200, visible)
  const countTransparency = useCounter(100, 1500, visible)
  const countPartners = useCounter(10, 1200, visible)
  const countYears = useCounter(15, 1000, visible)

  return (
    <>
      <section style={S.section} ref={sectionRef}>
        <div style={S.container}>

          {/* ── TOP ROW ────────────────────────────────────── */}
          <div style={S.topRow} className="as-top-row">

            {/* ── LEFT COLUMN: Content ── */}
            <div style={S.contentCol} className="as-content-col">
              
              {/* Badge pill */}
              <div style={S.sectionBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0B1F3A" style={{flexShrink:0}}>
                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                </svg>
                <span>Committed to Stewardship, Service &amp; Community Impact</span>
              </div>

              <h2 style={S.heading}>
                Supporting Families, Preserving Legacy, <span style={{ color: '#0B1F3A' }}>Serving Communities</span>
              </h2>
              
              <p style={S.leadText}>
                Paradise Family Trust is dedicated to responsible stewardship, long-term community support, and meaningful charitable impact. Through careful management of resources and thoughtful partnerships, we aim to create opportunities that strengthen families and uplift communities.
              </p>
              <p style={S.paragraph}>
                Our trust focuses on sustainable giving, educational support, and initiatives that promote stability and growth for future generations. By working with community partners and trusted organizations, we ensure that our contributions make a lasting and measurable difference.
              </p>

              {/* Founder Highlight */}
              <div style={S.founderHighlight} className="as-founder-highlight">
                <img src={agent1} alt="Founder" style={S.founderImage} />
                <div style={S.founderInfo}>
                  <blockquote style={S.blockquote}>
                    “A trust is not just about preserving assets — it's about preserving values and creating opportunities for future generations.”
                  </blockquote>
                  <div style={S.founderDetails}>
                    <h5 style={S.founderName}>Paradise Family Trust</h5>
                    <span style={S.founderRole}>Stewardship Committee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Visuals ── */}
            <div style={S.visualCol} className="as-visual-col">
              <div style={S.imageStack} className="as-image-stack">
                
                <div style={S.mainImageWrap}>
                  <img src={about1} alt="Community Impact" style={S.mainImg} />
                  <div style={S.experienceBadge} className="as-experience-badge">
                    <div style={S.badgeNumber}>14+</div>
                    <div style={S.badgeText}>Years of Trusted<br/>Stewardship</div>
                  </div>
                </div>

                <div style={S.overlayImageWrap} className="as-overlay-img-wrap">
                  <img src={about2} alt="Our Services" style={S.overlayImg} />
                </div>

              </div>
            </div>

          </div>

          {/* ── ACHIEVEMENTS GRID ──────────────────────────── */}
          <div style={S.achievementsGrid} className="as-achievements-grid">
            
            <div style={S.achievementItem} className="as-achievement-card">
              <div style={S.achievementIcon} className="as-achievement-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                </svg>
              </div>
              <div style={S.achievementNumber}>{countInitiatives}+</div>
              <div style={S.achievementLabel}>Community initiatives supported</div>
            </div>

            <div style={S.achievementItem} className="as-achievement-card">
              <div style={S.achievementIcon} className="as-achievement-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div style={S.achievementNumber}>{countTransparency}%</div>
              <div style={S.achievementLabel}>Commitment to transparency</div>
            </div>

            <div style={S.achievementItem} className="as-achievement-card">
              <div style={S.achievementIcon} className="as-achievement-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div style={S.achievementNumber}>{countPartners}+</div>
              <div style={S.achievementLabel}>Partner organizations</div>
            </div>

            <div style={S.achievementItem} className="as-achievement-card">
              <div style={S.achievementIcon} className="as-achievement-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <div style={S.achievementNumber}>{countYears}+</div>
              <div style={S.achievementLabel}>Years of stewardship</div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes floatAnim {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        .as-experience-badge {
          animation: floatAnim 4s ease-in-out infinite;
        }
        
        @keyframes iconPop {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.15); }
          100% { transform: translateY(0) scale(1); }
        }
        
        .as-achievement-card:hover .as-achievement-icon svg {
          animation: iconPop 0.4s ease-in-out;
        }
        
        .as-achievement-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 16px 40px rgba(11, 31, 58, 0.1) !important;
          border-color: #0B1F3A !important;
        }
        
        .as-founder-highlight:hover {
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .as-top-row { flex-direction: column !important; gap: 64px !important; }
          .as-content-col { width: 100% !important; padding-right: 0 !important; }
          .as-visual-col { width: 100% !important; }
          .as-image-stack { max-width: 600px; margin: 0 auto; }
          .as-achievements-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .as-founder-highlight { flex-direction: column !important; text-align: center; }
          .as-achievements-grid { grid-template-columns: 1fr !important; }
          .as-overlay-img-wrap { width: 60% !important; border-width: 6px !important; left: -10px !important; bottom: -20px !important; }
        }
      `}</style>
    </>
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

  // ── Top Row ─────────────────────────────────────────
  topRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 72,
    marginBottom: 80,
  },

  // Left Col
  contentCol: {
    flex: '1 1 50%',
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
    fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: 700,
    color: '#374151',
    lineHeight: 1.25,
    marginBottom: 24,
  },
  leadText: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 1.8,
    marginBottom: 16,
    fontWeight: 500,
  },
  paragraph: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 1.8,
    marginBottom: 36,
  },
  
  // Founder Block
  founderHighlight: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    background: '#F9FAFB',
    padding: '28px',
    borderRadius: 16,
    border: '1.5px solid #E8EBF0',
    borderLeft: '4px solid #0B1F3A',
    transition: 'box-shadow 0.3s ease',
  },
  founderImage: {
    width: 90,
    height: 90,
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'top',
    backgroundColor: '#fff',
    border: '1.5px solid #E8EBF0',
    boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
    flexShrink: 0,
  },
  founderInfo: {
    flex: 1,
  },
  blockquote: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#374151',
    lineHeight: 1.6,
    margin: '0 0 12px 0',
  },
  founderDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  founderName: {
    fontSize: 14,
    fontWeight: 700,
    color: '#0B1F3A',
    margin: 0,
  },
  founderRole: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: 500,
  },

  // Right Col
  visualCol: {
    flex: '1 1 50%',
    position: 'relative',
  },
  imageStack: {
    position: 'relative',
    width: '100%',
    minHeight: 500,
  },
  mainImageWrap: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '85%',
    height: '420px',
    borderRadius: 24,
    overflow: 'visible',
  },
  mainImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 24,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  },
  experienceBadge: {
    position: 'absolute',
    top: 40,
    left: -30,
    background: '#0B1F3A',
    padding: '20px 24px',
    borderRadius: 16,
    boxShadow: '0 12px 30px rgba(11,31,58,0.25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 3,
  },
  badgeNumber: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 32,
    fontWeight: 700,
    color: '#fff',
    lineHeight: 1,
    marginBottom: 4,
  },
  badgeText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: 500,
    lineHeight: 1.3,
  },
  overlayImageWrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '55%',
    height: '240px',
    borderRadius: 20,
    overflow: 'hidden',
    border: '10px solid #fff',
    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
    zIndex: 2,
  },
  overlayImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  // ── Bottom Grid ─────────────────────────────────────
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24,
  },
  achievementItem: {
    background: '#fff',
    border: '1px solid #E8EBF0',
    borderRadius: 16,
    padding: '36px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    cursor: 'default',
  },
  achievementIcon: {
    width: 60,
    height: 60,
    borderRadius: 14,
    background: '#F0F4FF',
    color: '#0B1F3A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  achievementNumber: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 36,
    fontWeight: 700,
    color: '#0B1F3A',
    lineHeight: 1,
    marginBottom: 8,
  },
  achievementLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: 500,
    lineHeight: 1.5,
  },
}
