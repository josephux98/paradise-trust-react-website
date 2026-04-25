// ─────────────────────────────────────────────────────────────
// WhatsAppButton.jsx
// Floating WhatsApp button — fixed bottom right on every page
// - Pulses to grab attention
// - Shows a tooltip on hover
// - Opens pre-filled message in WhatsApp
// - Hides when user is at very top (doesn't cover hero CTA)
// - Works on both mobile and desktop
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'

// ── CONFIG — change these anytime ────────────────────────────
const PHONE   = '919846547907'   // country code + number, no + or spaces
const MESSAGE = encodeURIComponent(
  'Hello, I would like to donate to Paradise Family & Social Welfare Trust. ' +
  'Please guide me on how I can help. 🙏'
)
const WA_URL  = `https://wa.me/${PHONE}?text=${MESSAGE}`

export default function WhatsAppButton() {
  const [visible,  setVisible]  = useState(false)  // shows after scroll
  const [tooltip,  setTooltip]  = useState(false)  // hover tooltip
  const [pulse,    setPulse]    = useState(true)   // attention pulse

  // Show button after user scrolls 200px down
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Stop pulsing after 6 seconds so it doesn't get annoying
  useEffect(() => {
    const timer = setTimeout(() => setPulse(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* ── FLOATING BUTTON ─────────────────── */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          ...S.btn,
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'scale(1)' : 'scale(0.8)',
          pointerEvents: visible ? 'all' : 'none',
        }}
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        onClick={() => setTooltip(false)}
      >
        {/* Pulse ring — draws attention */}
        {pulse && <span style={S.pulseRing} />}

        {/* WhatsApp icon */}
        <svg
          width="28" height="28"
          viewBox="0 0 24 24"
          fill="white"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.06 23.25l5.582-1.457A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.878 9.878 0 0 1-5.031-1.378l-.361-.214-3.735.976.999-3.634-.235-.374A9.855 9.855 0 0 1 2.106 12C2.106 6.53 6.53 2.106 12 2.106S21.894 6.53 21.894 12 17.47 21.894 12 21.894z"/>
        </svg>
      </a>

      {/* ── TOOLTIP ─────────────────────────── */}
      <div style={{
        ...S.tooltip,
        opacity:   tooltip && visible ? 1 : 0,
        transform: tooltip && visible
          ? 'translateY(50%) translateX(0)'
          : 'translateY(50%) translateX(8px)',
      }}>
        <div style={S.tooltipLine1}>Chat with us</div>
        <div style={S.tooltipLine2}>We reply within minutes 🙏</div>
        {/* Arrow */}
        <div style={S.tooltipArrow} />
      </div>

      {/* ── PULSE ANIMATION ─────────────────── */}
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.5); opacity: 0;   }
          100% { transform: scale(1.8); opacity: 0;   }
        }
        @keyframes wa-bounce {
          0%, 100% { transform: scale(1);    }
          50%       { transform: scale(1.08); }
        }
        .wa-btn-inner:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 8px 30px rgba(37,211,102,0.5) !important;
        }
      `}</style>
    </>
  )
}

// ── Styles ────────────────────────────────────────────────────
const S = {
  btn: {
    position:   'fixed',
    bottom:     100,
    right:      28,
    zIndex:     9999,
    width:      60,
    height:     60,
    borderRadius: '50%',
    background: '#25D366',          // official WhatsApp green
    display:    'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow:  '0 4px 20px rgba(37,211,102,0.4)',
    transition: 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.25s ease',
    cursor:     'pointer',
    textDecoration: 'none',
  },

  pulseRing: {
    position:     'absolute',
    inset:        0,
    borderRadius: '50%',
    background:   '#25D366',
    animation:    'wa-pulse 1.8s ease-out infinite',
    zIndex:       0,
  },

  tooltip: {
    position:   'fixed',
    bottom:     130,
    right:      100,
    zIndex:     9998,
    background: '#fff',
    borderRadius: 12,
    padding:    '10px 16px',
    boxShadow:  '0 4px 24px rgba(0,0,0,0.12)',
    border:     '1px solid #E8EBF0',
    transition: 'opacity 0.25s ease, transform 0.25s ease',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
  },

  tooltipLine1: {
    fontSize:   14,
    fontWeight: 700,
    color:      '#0B1F3A',
    fontFamily: "'Inter', system-ui, sans-serif",
  },

  tooltipLine2: {
    fontSize:   12,
    color:      '#6B7280',
    marginTop:  2,
    fontFamily: "'Inter', system-ui, sans-serif",
  },

  // Triangle arrow pointing right
  tooltipArrow: {
    position:   'absolute',
    right:      -8,
    top:        '50%',
    transform:  'translateY(-50%)',
    width:      0,
    height:     0,
    borderTop:  '7px solid transparent',
    borderBottom: '7px solid transparent',
    borderLeft: '8px solid #fff',
    filter:     'drop-shadow(2px 0 1px rgba(0,0,0,0.06))',
  },
}