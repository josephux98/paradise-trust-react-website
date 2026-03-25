import React from "react";
import contactImg from "../assets/img/images/contact us.png";

export default function Contact() {
  return (
    <>
      <section style={S.section}>
        <div style={S.container} className="contact-container">

          {/* LEFT CONTENT */}
          <div style={S.leftCol} className="contact-left">
            
            {/* Badge pill */}
            <div style={S.pill}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0B1F3A" style={{flexShrink:0}}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
              </svg>
              <span>Connect With Us</span>
            </div>

            <h2 style={S.heading}>
              Together, We Can Change<br />
              <span style={{ color: '#0B1F3A' }}>Lives</span>
            </h2>

            <p style={S.description}>
              Paradise Family &amp; Social Welfare Trust works every day to care for the elderly,
              support the poor, provide medical relief, and uplift communities.
              Whether you wish to donate, volunteer, or learn more about our mission,
              we would love to hear from you.
            </p>

            <div style={S.pointsList}>
              {[
                'Support elderly care and shelter programs',
                'Help provide medical aid to the poor',
                'Empower women and educate children'
              ].map((text, i) => (
                <div key={i} style={S.pointItem}>
                  <div style={S.checkIconWrap}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span style={S.pointText}>{text}</span>
                </div>
              ))}
            </div>

            <div style={S.ctaRow}>
              <button style={S.btnPrimary} className="contact-btn-primary">
                Contact Our Trust
              </button>

              <div style={S.callQuick}>
                <div style={S.callIconWrap} className="contact-call-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={S.callNeed}>Call Us for Assistance</span>
                  <a href="tel:+919846547907" style={S.callLink}>+91 9846547907</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div style={S.rightCol} className="contact-right">
            <div style={S.imageWrapper}>
              <img
                src={contactImg}
                alt="Community Support"
                style={S.mainImg}
                className="contact-main-img"
              />

              {/* Top right floating card */}
              <div style={S.experienceCard} className="contact-float-1">
                <div style={S.expCardIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff4757" className="wu-heart-icon">
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                  </svg>
                </div>
                <div>
                  <div style={S.expCardTitle}>Trusted Support</div>
                  <div style={S.expCardSub}>Community Care</div>
                </div>
              </div>

              {/* Bottom left floating card */}
              <div style={S.statBadge} className="contact-float-2">
                <span style={S.statBadgeNumber}>2015+</span>
                <span style={S.statBadgeText}>Serving Since</span>
                <span style={S.statBadgeSub}>Across Kerala</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Hover + responsive styles */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.2); }
        }
        @keyframes floatAnim1 {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50%      { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes floatAnim2 {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%      { transform: translateY(-6px) rotate(-2deg); }
        }

        .wu-heart-icon {
          animation: heartbeat 1.5s infinite;
          transform-origin: center;
        }
        .contact-float-1 {
          animation: floatAnim1 4s ease-in-out infinite;
        }
        .contact-float-2 {
          animation: floatAnim2 4s ease-in-out infinite 2s;
        }

        .contact-btn-primary {
          transition: all 0.25s ease !important;
        }
        .contact-btn-primary:hover {
          background: #071529 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(11,31,58,0.3) !important;
        }
        .contact-call-icon svg {
          transition: transform 0.2s ease;
        }
        .contact-call-icon:hover svg {
          transform: scale(1.1) rotate(5deg);
        }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .contact-container { flex-direction: column !important; gap: 56px !important; }
          .contact-left      { width: 100% !important; max-width: 100% !important; }
          .contact-right     { width: 100% !important; }
        }
      `}</style>
    </>
  );
}

// ── Styles ────────────────────────────────────────────────────
const S = {
  section: {
    background: 'rgb(244, 246, 249)',
    padding: '96px 24px',
  },

  container: {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'flex',
    gap: 72,
    alignItems: 'center',
  },

  // ── LEFT: Content ────────────────────────
  leftCol: {
    flex: 1,
    minWidth: 0,
  },

  pill: {
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
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: 700,
    color: '#0B1F3A',
    lineHeight: 1.2,
    marginBottom: 18,
  },

  description: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 1.8,
    marginBottom: 32,
  },

  pointsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginBottom: 40,
  },

  pointItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },

  checkIconWrap: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    background: '#E8EDF5',
    color: '#0B1F3A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  pointText: {
    fontSize: 15,
    color: '#374151',
    fontWeight: 500,
  },

  ctaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    flexWrap: 'wrap',
  },

  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '14px 32px',
    borderRadius: 999,
    background: '#0B1F3A',
    color: '#fff',
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "'Inter', 'Poppins', sans-serif",
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 4px 14px rgba(11,31,58,0.2)',
  },

  callQuick: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },

  callIconWrap: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: '#F0F4FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  callNeed: {
    display: 'block',
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 2,
  },

  callLink: {
    display: 'block',
    fontSize: 15,
    fontWeight: 600,
    color: '#0B1F3A',
    textDecoration: 'none',
  },

  // ── RIGHT: Image Stack ───────────────────
  rightCol: {
    width: '45%',
    flexShrink: 0,
  },

  imageWrapper: {
    position: 'relative',
    borderRadius: 20,
    overflow: 'visible',
  },

  mainImg: {
    width: '100%',
    height: 480,
    objectFit: 'cover',
    borderRadius: 20,
    display: 'block',
    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
  },

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

  statBadge: {
    position: 'absolute',
    bottom: -24,
    left: -24,
    background: '#0B1F3A',
    borderRadius: 14,
    padding: '14px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    minWidth: 160,
    boxShadow: '0 8px 24px rgba(11,31,58,0.25)',
    zIndex: 2,
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
}