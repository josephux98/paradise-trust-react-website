import { useState } from 'react'
import { Link } from 'react-router-dom'
import agent1 from '../assets/img/images/agent-1.jpeg'
import agent2 from '../assets/img/images/agent-2.jpg'
import agent3 from '../assets/img/images/agent-3.jpeg'
import agent4 from '../assets/img/images/agent-4.jpeg'

// ─────────────────────────────────────────────────────────────
// Trustees.jsx — matches paradisefamilytrust.org exactly
// - Section title centred
// - 4 agent cards in a row
// - Card: photo with overlay + badge, name, role, desc,
//         stats row, location, specialty tags
// - Hover: photo overlay with contact buttons appears
// - CTA button at bottom
// ─────────────────────────────────────────────────────────────

// ── DATA — edit content here, not in the JSX ─────────────────
const trustees = [
  {
    id: 1,
    name: 'Mr. Julies M. Lazar',
    role: 'Founder & Managing Trustee',
    badge: 'Founder',
    badgeColor: '#1a6b3c',          // green
    desc: 'Visionary leader and lifelong social worker dedicated to serving the poor, elderly, and vulnerable communities.',
    stats: [
      { num: '2015+', label: 'Founded' },
      { num: 'Head',  label: 'Trust'   },
    ],
    location: 'Chalakudy, Kerala',
    tags: ['Leadership', 'Service'],
    image: agent1,
  },
  {
    id: 2,
    name: 'Mrs. Jaya Julies',
    role: 'Joint Managing Trustee',
    badge: 'Managing',
    badgeColor: '#1a3a6b',          // navy
    desc: 'Oversees daily trust operations, welfare programs, and community outreach activities.',
    stats: [
      { num: 'Operations', label: 'Focus' },
      { num: 'Welfare',    label: 'Lead'  },
    ],
    location: 'Chalakudy, Kerala',
    tags: ['Admin', 'Elder Care'],
    image: agent2,
  },
  {
    id: 3,
    name: 'Anna Juliya',
    role: 'Trustee & Youth Coordinator',
    badge: 'Trustee',
    badgeColor: '#6b3a1a',          // brown
    desc: 'Supports educational programs, youth initiatives, and volunteer coordination.',
    stats: [
      { num: 'Education', label: 'Focus'    },
      { num: 'Youth',     label: 'Programs' },
    ],
    location: 'Chalakudy, Kerala',
    tags: ['Education', 'Volunteers'],
    image: agent3,
  },
  {
    id: 4,
    name: 'Romiya Julies',
    role: 'Trustee & Community Support',
    badge: 'Trustee',
    badgeColor: '#6b1a5a',          // purple
    desc: 'Works with women empowerment, community welfare, and social development initiatives.',
    stats: [
      { num: 'Women',     label: 'Care' },
      { num: 'Community', label: 'Aid'  },
    ],
    location: 'Chalakudy, Kerala',
    tags: ['Empowerment', 'Social'],
    image: agent4,
  },
]

// ── Single agent card ─────────────────────────────────────────
function AgentCard({ trustee }) {
  const [hovered, setHovered] = useState(false)
  const [imgErr,  setImgErr]  = useState(false)

  return (
    <div
      style={S.card}
      className="trustee-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Photo area ──────────────────────── */}
      <div style={S.photoWrap}>

        {/* Photo or initials fallback */}
        {!imgErr ? (
          <img
            src={trustee.image}
            alt={trustee.name}
            style={S.photo}
            onError={() => setImgErr(true)}
          />
        ) : (
          <div style={{
            ...S.photo,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: trustee.badgeColor + '22',
            fontFamily: "'Playfair Display', serif",
            fontSize: 48, fontWeight: 700,
            color: trustee.badgeColor,
          }}>
            {trustee.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
          </div>
        )}

        {/* Hover overlay — contact buttons */}
        <div style={{
          ...S.overlay,
          opacity: hovered ? 1 : 0,
        }}>
          <div style={S.overlayBtns}>
            {[
              { title: 'Call', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg> },
              { title: 'Email', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
              { title: 'WhatsApp', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.06 23.25l5.582-1.457A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.878 9.878 0 0 1-5.031-1.378l-.361-.214-3.735.976.999-3.634-.235-.374A9.855 9.855 0 0 1 2.106 12C2.106 6.53 6.53 2.106 12 2.106S21.894 6.53 21.894 12 17.47 21.894 12 21.894z"/></svg> },
            ].map(btn => (
              <button key={btn.title} style={S.overlayBtn} title={btn.title} className="trustee-overlay-btn">
                {btn.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Badge */}
        <span style={{ ...S.badge, background: trustee.badgeColor }}>
          {trustee.badge}
        </span>
      </div>

      {/* ── Card body ───────────────────────── */}
      <div style={S.cardBody}>

        {/* Name + role */}
        <div style={S.nameMeta}>
          <h3 style={S.name}>{trustee.name}</h3>
          <p style={S.role}>{trustee.role}</p>
        </div>

        {/* Description */}
        <p style={S.desc}>{trustee.desc}</p>

        {/* Stats row */}
        <div style={S.statsRow}>
          <div style={S.statItem}>
            <span style={S.statNum}>{trustee.stats[0].num}</span>
            <span style={S.statLbl}>{trustee.stats[0].label}</span>
          </div>
          <div style={S.statDivider} />
          <div style={S.statItem}>
            <span style={S.statNum}>{trustee.stats[1].num}</span>
            <span style={S.statLbl}>{trustee.stats[1].label}</span>
          </div>
        </div>

        {/* Location */}
        <div style={S.location}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{trustee.location}</span>
        </div>

        {/* Specialty tags */}
        <div style={S.tags}>
          {trustee.tags.map(tag => (
            <span key={tag} style={S.tag}>{tag}</span>
          ))}
        </div>

      </div>
    </div>
  )
}

// ── Main section ──────────────────────────────────────────────
export default function Trustees() {
  return (
    <section style={S.section}>
      <div style={S.container}>

        {/* Section title */}
        <div style={S.sectionTitle}>
          <h2 style={S.sectionH2}>Our Trustees</h2>
          <p style={S.sectionP}>Guided by Compassion. Driven by Service.</p>
        </div>

        {/* Cards grid */}
        <div style={S.grid} className="trustees-grid">
          {trustees.map(t => (
            <AgentCard key={t.id} trustee={t} />
          ))}
        </div>

        {/* CTA */}
        <div style={S.ctaWrap}>
          <Link to="/about" style={S.ctaBtn} className="trustees-cta-btn">
            <span>Meet Our Full Trust Team</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

      </div>

      <style>{`
        /* Card lift on hover */
        .trustee-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 50px rgba(0,0,0,0.14) !important;
        }

        /* Overlay contact button hover */
        .trustee-overlay-btn:hover {
          background: #fff !important;
          color: #0B1F3A !important;
          transform: scale(1.1);
        }

        /* CTA button hover */
        .trustees-cta-btn:hover {
          background: #071529 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(11,31,58,0.3) !important;
        }
        .trustees-cta-btn:hover svg { transform: translateX(4px); }
        .trustees-cta-btn svg { transition: transform 0.2s ease; }

        /* Responsive */
        @media (max-width: 1024px) {
          .trustees-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .trustees-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

// ── All styles ────────────────────────────────────────────────
const S = {
  section: {
    background: 'rgb(244, 246, 249)',
    padding: '96px 24px',
  },

  container: {
    maxWidth: 1100,
    margin: '0 auto',
  },

  // Section title
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 56,
  },

  sectionH2: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: 700,
    color: '#0B1F3A',
    marginBottom: 10,
  },

  sectionP: {
    fontSize: 16,
    color: '#6B7280',
  },

  // 4-column grid
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24,
    marginBottom: 56,
  },

  // ── Card ────────────────────────────────
  card: {
    background: '#fff',
    borderRadius: 16,
    border: '1.5px solid #E8EBF0',
    overflow: 'hidden',
    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    display: 'flex',
    flexDirection: 'column',
  },

  // Photo
  photoWrap: {
    position: 'relative',
    height: 280,
    overflow: 'hidden',
  },

  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 15%',
    display: 'block',
    transition: 'transform 0.4s ease',
  },

  // Hover overlay
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(11,31,58,0.72)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.25s ease',
  },

  overlayBtns: {
    display: 'flex',
    gap: 12,
  },

  overlayBtn: {
    width: 42,
    height: 42,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.15)',
    border: '1.5px solid rgba(255,255,255,0.4)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s, transform 0.2s',
  },

  // Status badge on photo
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    color: '#fff',
    fontSize: 11,
    fontWeight: 700,
    padding: '4px 12px',
    borderRadius: 999,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },

  // Card body
  cardBody: {
    padding: '20px 18px 22px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },

  nameMeta: {
    marginBottom: 10,
    textAlign: 'center',
  },

  name: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 18,
    fontWeight: 700,
    color: '#0B1F3A',
    marginBottom: 3,
    lineHeight: 1.3,
  },

  role: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: 500,
  },

  desc: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 1.65,
    marginBottom: 16,
    textAlign: 'center',
    flex: 1,
  },

  // Stats row with divider
  statsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: '12px 16px',
    background: '#F0F4FF',
    border: '1px solid #DDE5F5',
    borderRadius: 12,
    marginBottom: 14,
  },

  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  },

  statNum: {
    fontSize: 13,
    fontWeight: 700,
    color: '#0B1F3A',
    lineHeight: 1,
  },

  statLbl: {
    fontSize: 10,
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  statDivider: {
    width: 1,
    height: 28,
    background: '#DDE5F5',
  },

  // Location
  location: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 12,
  },

  // (span inside location)
  // fontSize handled inline below via children

  // Tags
  tags: {
    display: 'flex',
    justifyContent: 'center',
    gap: 6,
    flexWrap: 'wrap',
  },

  tag: {
    fontSize: 11,
    fontWeight: 600,
    padding: '3px 10px',
    borderRadius: 999,
    background: '#F0F4FF',
    color: '#0B1F3A',
  },

  // CTA
  ctaWrap: {
    textAlign: 'center',
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
}
