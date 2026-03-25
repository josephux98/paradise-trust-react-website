import { useEffect, useRef, useState } from 'react'

export default function AboutTimeline() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const milestones = [
    {
      year: '2015',
      title: 'Trust Established',
      description: 'Paradise Family & Social Welfare Trust was officially founded on 21st March 2015 by Mr. Julies M. Lazar, with the aim of serving society through charitable initiatives focused on elderly care, education, and community welfare.'
    },
    {
      year: '2016',
      title: 'Community Welfare Initiatives',
      description: 'The trust began planning and organizing charitable activities aimed at supporting elderly citizens and economically disadvantaged families within the community.'
    },
    {
      year: '2018',
      title: 'Expansion of Social Support Programs',
      description: 'The trust strengthened its mission by promoting educational initiatives, community development activities, and assistance for people in need.'
    },
    {
      year: '2021',
      title: 'Vision for Elderly Care',
      description: 'The trust expanded its vision by planning to establish an old-age care initiative under the banner "Snehakoodaram", aiming to provide compassionate care and support for elderly individuals irrespective of caste, religion, or background.'
    },
    {
      year: '2024',
      title: 'Growing Community Impact',
      description: 'The trust continues to expand its social welfare programs including educational support, medical assistance, and charitable activities benefiting the broader community.'
    }
  ]

  return (
    <>
      <section className="timeline-section" ref={sectionRef}>
        <div className="container">
          <div className="timeline-header">
            <h2 className="timeline-title">Our Journey of Stewardship</h2>
            <p className="timeline-subtitle">
              Since its founding, Paradise Family Trust has been guided by a commitment 
              to responsible stewardship, community support, and long-term impact. Our 
              journey reflects years of careful planning, meaningful partnerships, and 
              dedication to strengthening families and communities.
            </p>
          </div>

          <div className={`timeline ${visible ? 'visible' : ''}`}>
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h4 className="timeline-item-title">{milestone.title}</h4>
                  <p className="timeline-item-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .timeline-section {
          padding: 64px 20px;
          background: #f9fafb;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .timeline-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 700;
          color: #0B1F3A;
          margin-bottom: 16px;
        }

        .timeline-subtitle {
          font-size: 15px;
          line-height: 1.8;
          color: #4B5563;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Timeline Container */
        .timeline {
          position: relative;
          padding: 24px 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, rgba(11,31,58,0), #0B1F3A, rgba(11,31,58,0));
          transform: translateX(-50%);
        }

        /* Timeline Items */
        .timeline-item {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 32px;
          align-items: center;
          margin-bottom: 32px;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .timeline.visible .timeline-item {
          animation: fadeUpStagger 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .timeline.visible .timeline-item:nth-child(1) { animation-delay: 0.10s; }
        .timeline.visible .timeline-item:nth-child(2) { animation-delay: 0.25s; }
        .timeline.visible .timeline-item:nth-child(3) { animation-delay: 0.40s; }
        .timeline.visible .timeline-item:nth-child(4) { animation-delay: 0.55s; }
        .timeline.visible .timeline-item:nth-child(5) { animation-delay: 0.70s; }

        @keyframes fadeUpStagger {
          to { opacity: 1; transform: translateY(0); }
        }

        .timeline-item.left .timeline-content {
          grid-column: 1;
          text-align: right;
        }

        .timeline-item.left .timeline-year {
          grid-column: 2;
        }

        .timeline-item.right {
          direction: rtl;
        }

        .timeline-item.right .timeline-content {
          grid-column: 1;
          text-align: left;
          direction: ltr;
        }

        .timeline-item.right .timeline-year {
          grid-column: 2;
          direction: ltr;
        }

        /* Year Badge */
        .timeline-year {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #0B1F3A 0%, #1a3a6b 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          position: relative;
          z-index: 2;
          animation: pulseOuter 3s infinite ease-in-out;
        }

        @keyframes pulseOuter {
          0% { box-shadow: 0 0 0 5px #f9fafb, 0 0 0 7px rgba(11, 31, 58, 0.15); }
          50% { box-shadow: 0 0 0 5px #f9fafb, 0 0 0 11px rgba(11, 31, 58, 0.35); }
          100% { box-shadow: 0 0 0 5px #f9fafb, 0 0 0 7px rgba(11, 31, 58, 0.15); }
        }

        /* Content Card */
        .timeline-content {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .timeline-item-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 19px;
          font-weight: 700;
          color: #0B1F3A;
          margin: 0 0 12px;
        }

        .timeline-item-description {
          font-size: 14px;
          line-height: 1.7;
          color: #4B5563;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .timeline::before {
            left: 40px;
          }

          .timeline-item {
            grid-template-columns: auto 1fr;
            gap: 24px;
            margin-bottom: 40px;
          }

          .timeline-item.left,
          .timeline-item.right {
            direction: ltr;
          }

          .timeline-item.left .timeline-content,
          .timeline-item.right .timeline-content {
            grid-column: 2;
            text-align: left;
          }

          .timeline-item.left .timeline-year,
          .timeline-item.right .timeline-year {
            grid-column: 1;
          }

          .timeline-year {
            width: 56px;
            height: 56px;
            font-size: 14px;
          }

          @keyframes pulseOuter {
            0% { box-shadow: 0 0 0 4px #f9fafb, 0 0 0 6px rgba(11, 31, 58, 0.15); }
            50% { box-shadow: 0 0 0 4px #f9fafb, 0 0 0 9px rgba(11, 31, 58, 0.35); }
            100% { box-shadow: 0 0 0 4px #f9fafb, 0 0 0 6px rgba(11, 31, 58, 0.15); }
          }

          .timeline-content { padding: 20px; }
        }

        @media (max-width: 480px) {
          .timeline-section {
            padding: 60px 15px;
          }

          .timeline::before {
            left: 30px;
          }

          .timeline-year {
            width: 48px;
            height: 48px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  )
}
