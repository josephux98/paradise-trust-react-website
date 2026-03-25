import { useEffect, useRef, useState } from 'react'

import agent1 from '../assets/img/images/agent-1.jpeg'
import agent2 from '../assets/img/images/agent-2.jpeg'
import agent3 from '../assets/img/images/agent-3.jpeg'
import agent4 from '../assets/img/images/agent-4.jpeg'
import agent5 from '../assets/img/images/agent-5.jpeg'
import agent6 from '../assets/img/images/agent-6.jpeg'
import agent7 from '../assets/img/images/agent-7.jpeg'
import agent8 from '../assets/img/images/agent-8.jpeg'

export default function Trustees() {
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

  const trustees = [
    {
      name: 'Mr. Julies M. Lazar',
      role: 'Founder & Managing Trustee',
      image: agent1
    },
    {
      name: 'Mrs. Jaya Julies',
      role: 'Joint Managing Trustee',
      image: agent2
    },
    {
      name: 'Anna Juliya',
      role: 'Trustee & Youth Coordinator',
      image: agent3
    },
    {
      name: 'Romiya Julies',
      role: 'Trustee & Community Support',
      image: agent4
    },
    {
      name: 'Baby M K',
      role: 'Trustee',
      image: agent5
    },
    {
      name: 'Joshua Julies',
      role: 'Trustee',
      image: agent6
    },
    {
      name: 'Nidhin Joseph',
      role: 'Trustee',
      image: agent7
    },
    {
      name: 'Nixon Johnson',
      role: 'Trustee',
      image: agent8
    }
  ]

  return (
    <>
      <section className="tf-section" ref={sectionRef}>
        <div className="tf-container">
          
          <div className="tf-header">
            <h2 className="tf-title">Meet Our Trust Members</h2>
            <p className="tf-description">
              Paradise Family Trust is guided by a dedicated group of trustees and advisors 
              who work together to ensure responsible governance, transparency, and long-term stewardship of the trust’s mission and resources.
            </p>
          </div>

          <div className={`tf-grid ${visible ? 'visible' : ''}`}>
            {trustees.map((trustee) => (
              <div key={trustee.name} className="tf-team-member">
                <div className="tf-member-image">
                  <img 
                    src={trustee.image} 
                    alt={trustee.name}
                  />
                </div>
                <div className="tf-member-info">
                  <h5>{trustee.name}</h5>
                  <span>{trustee.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="tf-quote">
            “Paradise Family Trust operates with a commitment to transparency, stewardship, and community impact.”
          </div>

        </div>
      </section>

      <style>{`
        .tf-section {
          padding: 96px 24px;
          background: #ffffff;
        }

        .tf-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .tf-header {
          text-align: center;
          margin-bottom: 56px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .tf-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          color: #0B1F3A;
          margin-bottom: 16px;
        }

        .tf-description {
          font-size: 16px;
          line-height: 1.75;
          color: #4B5563;
        }

        /* Grid Layout */
        .tf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        /* Team Member Card */
        .tf-team-member {
          background: #ffffff;
          border: 1px solid #E8EBF0;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }

        /* Staggered Animations */
        .tf-grid.visible .tf-team-member {
          animation: popUpStagger 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .tf-grid.visible .tf-team-member:nth-child(1) { animation-delay: 0.05s; }
        .tf-grid.visible .tf-team-member:nth-child(2) { animation-delay: 0.15s; }
        .tf-grid.visible .tf-team-member:nth-child(3) { animation-delay: 0.25s; }
        .tf-grid.visible .tf-team-member:nth-child(4) { animation-delay: 0.35s; }
        .tf-grid.visible .tf-team-member:nth-child(5) { animation-delay: 0.15s; }
        .tf-grid.visible .tf-team-member:nth-child(6) { animation-delay: 0.25s; }
        .tf-grid.visible .tf-team-member:nth-child(7) { animation-delay: 0.35s; }
        .tf-grid.visible .tf-team-member:nth-child(8) { animation-delay: 0.45s; }

        @keyframes popUpStagger {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .tf-team-member:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 16px 40px rgba(11, 31, 58, 0.1) !important;
        }

        .tf-member-image {
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .tf-member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s ease;
        }

        .tf-team-member:hover .tf-member-image img {
          transform: scale(1.08);
        }

        .tf-member-info {
          padding: 20px;
          text-align: center;
        }

        .tf-member-info h5 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px;
          font-weight: 700;
          color: #0B1F3A;
          margin: 0 0 4px;
        }

        .tf-member-info span {
          font-size: 13px;
          color: #6B7280;
          font-weight: 500;
        }

        /* Footer Quote */
        .tf-quote {
          text-align: center;
          font-size: 16px;
          font-style: italic;
          color: #6B7280;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .tf-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 576px) {
          .tf-grid { grid-template-columns: 1fr; }
          .tf-member-image { height: 360px; }
        }
      `}</style>
    </>
  )
}
