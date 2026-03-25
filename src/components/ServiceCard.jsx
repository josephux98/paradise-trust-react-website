import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import aboutUsRealImg from '../assets/img/images/aboutusreal1.png'

export default function ServiceCard() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  // Triggers the fade-up animations when scrolling into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: "bi-house-heart",
      title: "Elderly Care Services",
      desc: <>Providing compassionate care and support for senior citizens through initiatives like <strong>Snehakoodaram</strong>, ensuring dignity, safety, and emotional wellbeing.</>,
      features: ["Old Age Home Support", "Daily Care & Assistance", "Safe Living Environment"]
    },
    {
      icon: "bi-heart-pulse",
      title: "Medical Assistance",
      desc: "Supporting economically disadvantaged people suffering from chronic diseases by providing medical help, guidance, and access to healthcare support.",
      features: ["Medical Aid Programs", "Support for Chronic Illness", "Health Awareness Activities"]
    },
    {
      icon: "bi-mortarboard",
      title: "Educational Support",
      desc: "Promoting education and learning opportunities for children and youth through educational support programs and community development initiatives.",
      features: ["Student Support Programs", "Educational Guidance", "Learning Development"]
    },
    {
      icon: "bi-people",
      title: "Community Welfare Programs",
      desc: "Organizing charitable activities and social welfare initiatives to support underprivileged families and improve community wellbeing.",
      features: ["Charity Programs", "Community Development", "Social Support Initiatives"]
    },
    {
      icon: "bi-person-hearts",
      title: "Women Empowerment",
      desc: "Encouraging women empowerment by supporting self-help groups, skill development, and opportunities for financial and social independence.",
      features: ["Self Help Groups", "Skill Development Programs", "Women Support Initiatives"]
    },
    {
      icon: "bi-umbrella",
      title: "Disaster & Relief Support",
      desc: "Providing humanitarian assistance during natural disasters and emergencies to help affected communities recover and rebuild their lives.",
      features: ["Disaster Relief Assistance", "Emergency Community Support", "Food & Essential Aid"]
    }
  ]

  return (
    <>
      <section className="sc-section" id="services" ref={sectionRef}>
        <div className={`sc-container ${visible ? 'visible' : ''}`}>

          {/* ── Top Section ───────────────────────────── */}
          <div className="sc-top-row">
            <div className="sc-content-col">
              <div className="sc-section-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0B1F3A" style={{flexShrink:0}}>
                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                </svg>
                <span>Our Mission</span>
              </div>
              <h2 className="sc-heading">
                Building Hope, Restoring Dignity, <br/><span style={{ color: '#0B1F3A' }}>Changing Lives</span>
              </h2>
              <p className="sc-lead-text">
                Paradise Family &amp; Social Welfare Trust was founded in 2015 with the mission to serve the elderly, poor, and vulnerable without discrimination. Through elderly care, education, medical support, and community programs, we work to create a society where every individual lives with dignity, care, and hope.
              </p>
            </div>
            
            <div className="sc-image-col">
              <div className="sc-image-showcase">
                <img src={aboutUsRealImg} alt="Paradise Family Trust work" className="sc-main-image" />
                <div className="sc-experience-card sc-float-anim">
                  <div className="sc-exp-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff4757">
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="sc-exp-title">Compassion in Action</div>
                    <div className="sc-exp-sub">Serving those in need</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Services Grid ───────────────────────────── */}
          <div className="sc-grid">
            {services.map((svc, i) => (
              <div key={i} className="sc-card">
                <div className="sc-card-icon">
                  <i className={`bi ${svc.icon}`}></i>
                </div>
                <h4 className="sc-title">{svc.title}</h4>
                <p className="sc-desc">{svc.desc}</p>
                <div className="sc-features">
                  {svc.features.map((feature, idx) => (
                    <div className="sc-feature-item" key={idx}>
                      <i className="bi bi-check2"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA Section ───────────────────────────── */}
          <div className="sc-cta-section">
            <div className="sc-cta-content">
              <h3>Be a Part of Our Mission</h3>
              <p>Your support can help us care for the elderly, provide medical assistance, promote education, and uplift underprivileged communities.</p>
            </div>
            <div className="sc-cta-action">
              <Link to="/contact" className="sc-btn-cta">Donate Now</Link>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .sc-section {
          padding: 80px 24px;
          background: #ffffff;
        }
        .sc-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Top Row Styling */
        .sc-top-row {
          display: flex;
          align-items: center;
          gap: 64px;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(30px);
        }
        .sc-container.visible .sc-top-row {
          animation: popUpStagger 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .sc-content-col {
          flex: 1;
        }
        .sc-image-col {
          width: 45%;
          flex-shrink: 0;
        }
        .sc-section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #F0F4FF;
          color: #0B1F3A;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .sc-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          color: #374151;
          line-height: 1.25;
          margin-bottom: 24px;
        }
        .sc-lead-text {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.8;
          font-weight: 500;
        }
        .sc-image-showcase {
          position: relative;
        }
        .sc-main-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.12);
          display: block;
        }
        .sc-experience-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: #fff;
          border-radius: 14px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
          z-index: 2;
        }
        .sc-exp-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #FFEBEB;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sc-exp-title {
          font-size: 13px;
          font-weight: 700;
          color: #0B1F3A;
          line-height: 1.3;
        }
        .sc-exp-sub {
          font-size: 11px;
          color: #9CA3AF;
          margin-top: 3px;
        }
        @keyframes floatAnimSC {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        .sc-float-anim {
          animation: floatAnimSC 4s ease-in-out infinite;
        }

        /* Grid Layout */
        .sc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 64px;
        }

        /* Card Styling */
        .sc-card {
          background: #ffffff;
          border: 1px solid #E8EBF0;
          border-radius: 16px;
          padding: 40px 32px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }

        /* Staggered Animations replacing AOS */
        .sc-container.visible .sc-card {
          animation: popUpStagger 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .sc-container.visible .sc-card:nth-child(1) { animation-delay: 0.05s; }
        .sc-container.visible .sc-card:nth-child(2) { animation-delay: 0.15s; }
        .sc-container.visible .sc-card:nth-child(3) { animation-delay: 0.25s; }
        .sc-container.visible .sc-card:nth-child(4) { animation-delay: 0.35s; }
        .sc-container.visible .sc-card:nth-child(5) { animation-delay: 0.45s; }
        .sc-container.visible .sc-card:nth-child(6) { animation-delay: 0.55s; }

        @keyframes popUpStagger {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .sc-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: #0B1F3A;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .sc-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 40px rgba(11, 31, 58, 0.1) !important;
          border-color: #0B1F3A !important;
        }
        .sc-card:hover::before {
          transform: scaleX(1);
        }

        /* Icon Styling */
        .sc-card-icon {
          width: 64px;
          height: 64px;
          background: #F0F4FF;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: transform 0.4s ease, background 0.3s ease;
        }
        .sc-card-icon i {
          font-size: 32px;
          color: #0B1F3A;
          transition: color 0.3s ease;
        }
        .sc-card:hover .sc-card-icon {
          transform: scale(1.1) rotate(5deg);
          background: #0B1F3A;
        }
        .sc-card:hover .sc-card-icon i {
          color: #ffffff;
        }

        /* Content Styling */
        .sc-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #0B1F3A;
          margin: 0 0 16px;
          line-height: 1.3;
        }
        .sc-desc {
          font-size: 15px;
          line-height: 1.7;
          color: #6B7280;
          margin: 0 0 24px;
        }
        .sc-desc strong {
          color: #0B1F3A;
        }

        /* Features List */
        .sc-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-top: 1px solid #E8EBF0;
          padding-top: 24px;
        }
        .sc-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .sc-feature-item i {
          font-size: 18px;
          color: #0B1F3A;
          font-weight: bold;
        }
        .sc-feature-item span {
          font-size: 14px;
          color: #4B5563;
          font-weight: 500;
        }

        /* CTA Section */
        .sc-cta-section {
          background: #F9FAFB;
          border-radius: 20px;
          padding: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          border-left: 6px solid #0B1F3A;
          opacity: 0;
          transform: translateY(30px);
          transition: box-shadow 0.3s ease;
        }
        .sc-cta-section:hover {
          box-shadow: 0 15px 35px rgba(11,31,58,0.06);
        }
        .sc-container.visible .sc-cta-section {
          animation: popUpStagger 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
        }
        .sc-cta-content h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #0B1F3A;
          margin: 0 0 12px;
        }
        .sc-cta-content p {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.6;
          margin: 0;
          max-width: 700px;
        }
        .sc-cta-action {
          flex-shrink: 0;
        }
        .sc-btn-cta {
          display: inline-flex;
          align-items: center;
          padding: 16px 36px;
          background: #0B1F3A;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 6px 16px rgba(11, 31, 58, 0.2);
        }
        .sc-btn-cta:hover {
          background: #071529;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(11, 31, 58, 0.3);
          color: #fff;
        }

        /* Responsive Layouts */
        @media (max-width: 992px) {
          .sc-top-row { flex-direction: column; gap: 48px; }
          .sc-image-col { width: 100%; max-width: 600px; margin: 0 auto; }
          .sc-grid { grid-template-columns: repeat(2, 1fr); }
          .sc-cta-section { flex-direction: column; text-align: center; padding: 40px 32px; }
          .sc-cta-content p { margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .sc-section { padding: 64px 20px; }
          .sc-grid { grid-template-columns: 1fr; gap: 24px; }
          .sc-card { padding: 32px 24px; }
          .sc-cta-content h3 { font-size: 24px; }
        }
      `}</style>
    </>
  )
}
