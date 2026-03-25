import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/trustlogo.png'

// ─────────────────────────────────────────────────────────────
// Navbar.jsx — matches paradisefamilytrust.org exactly
// White background, logo left, nav links centre, Donate right
// Scrolled: adds shadow. Mobile: hamburger menu slides down.
// ─────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when route changes
  const closeMenu = () => setMenuOpen(false)

  const links = [
    { to: '/',         label: 'Home'     },
    { to: '/about',    label: 'About'    },
    { to: '/services', label: 'Services' },
    { to: '/contact',  label: 'Contact'  },
  ]

  return (
    <>
      <header style={{
        ...S.header,
        paddingTop: scrolled ? 12 : 24,
      }}>
        <nav style={{
          ...S.navContainer,
          boxShadow: scrolled ? '0 8px 30px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.05)',
        }}>
          {/* ── LOGO ────────────────────────────── */}
          <Link to="/" style={S.logo} onClick={closeMenu}>
            <img
              src={logo}
              alt="Paradise Family Trust"
              style={S.logoImg}
              onError={e => { e.target.style.display = 'none' }}
            />
          
          </Link>

          {/* ── DESKTOP NAV LINKS (CENTER) ──────── */}
          <div className="nav-desktop-links" style={S.desktopLinks}>
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                style={({ isActive }) => ({
                  ...S.navLink,
                  color: isActive ? '#0B1F3A' : '#333333',
                  fontWeight: isActive ? 600 : 500,
                  borderBottom: isActive ? '2px solid #0B1F3A' : '2px solid transparent',
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* ── RIGHT: DONATE + HAMBURGER ───────── */}
          <div style={S.rightGroup}>
            <Link to="/contact" className="nav-donate-btn desktop-donate-btn" style={S.donateBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="donate-icon">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>Donate Now</span>
            </Link>

            <button
              className="nav-hamburger"
              style={S.hamburger}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span style={{
                ...S.bar,
                transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
              }} />
              <span style={{
                ...S.bar,
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'none',
              }} />
              <span style={{
                ...S.bar,
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
              }} />
            </button>
          </div>
        </nav>

        {/* ── MOBILE DROPDOWN MENU ────────────── */}
        <div style={{
          ...S.mobileMenuWrap,
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
        }}>
          <div style={S.mobileMenuInner}>
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={closeMenu}
                style={({ isActive }) => ({
                  ...S.mobileLink,
                  color: isActive ? '#0B1F3A' : '#333333',
                  fontWeight: isActive ? 600 : 500,
                  backgroundColor: isActive ? 'rgba(11, 31, 58, 0.05)' : 'transparent',
                })}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="nav-donate-btn"
              style={{ ...S.donateBtn, marginTop: 12 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="donate-icon">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>Donate Now</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Responsive classes */}
      <style>{`
        /* Global Font Family Reset for Navbar */
        .nav-desktop-links a, .nav-hamburger, .nav-donate-btn {
          font-family: 'Inter', 'Poppins', sans-serif;
        }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
        }

        /* Animations and Hover effects */
        .nav-donate-btn {
          position: relative;
          overflow: hidden;
        }
        .nav-donate-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          transition: all 0.75s ease;
        }
        .nav-donate-btn:hover {
          background-color: #071529 !important;
          box-shadow: 0 6px 18px rgba(11, 31, 58, 0.3), 0 0 10px rgba(255, 71, 87, 0.2) !important;
          transform: translateY(-2px);
        }
        .nav-donate-btn:hover::after {
          left: 125%;
          transition: all 0.75s ease;
        }
        .nav-desktop-links a:hover {
          color: #0B1F3A !important;
        }
        .nav-donate-btn:hover .donate-icon {
          animation: heartbeat 1.5s ease-in-out infinite;
          fill: #ff4757;
          stroke: #ff4757;
        }
        .donate-icon {
          transition: all 0.3s ease;
        }

        /* Responsive Layouts */
        .nav-desktop-links { display: flex !important; }
        .nav-donate-btn    { display: flex !important; }
        .nav-hamburger     { display: none !important; }

        /* Tablet and Mobile adjustments */
        @media (max-width: 900px) {
          .nav-desktop-links { display: none !important; }
          .nav-donate-btn.desktop-donate-btn { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
      `}</style>
    </>
  )
}

const S = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '24px 24px 0',
    transition: 'padding 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Inter', 'Poppins', sans-serif",
  },

  navContainer: {
    width: '100%',
    maxWidth: 1200,
    height: 76,
    background: '#F5F6F8',
    border: '1px solid #E5E7EB',
    borderRadius: 999, // Pill shape edges
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px', // Symmetrically balanced padding
    transition: 'box-shadow 0.3s ease',
    position: 'relative',
    zIndex: 1001,
  },

  // ── Logo ──────────────────────────────────
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    textDecoration: 'none',
    flexShrink: 0,
  },

  logoImg: {
    height: 48,
    width: 'auto',
    display: 'block',
    objectFit: 'contain',
  },

  logoTextWrap: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.25,
  },

  logoName: {
    fontFamily: "'Inter', 'Poppins', sans-serif",
    fontSize: 16,
    fontWeight: 700,
    color: '#0B1F3A',
    letterSpacing: '0.5px',
  },

  logoSub: {
    fontSize: 11,
    color: '#333333',
    fontWeight: 500,
  },

  // ── Desktop nav links (centre) ────────────
  desktopLinks: {
    alignItems: 'center',
    gap: 40,
    // display handled by CSS class for responsiveness
  },

  navLink: {
    fontFamily: "'Inter', 'Poppins', sans-serif",
    fontSize: 15,
    textDecoration: 'none',
    padding: '8px 0',
    transition: 'all 0.25s ease',
  },

  // ── Right group ───────────────────────────
  rightGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    flexShrink: 0,
  },

  donateBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 28px',
    borderRadius: 999, // Pill shape
    background: '#0B1F3A',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "'Inter', 'Poppins', sans-serif",
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(11, 31, 58, 0.15)',
  },

  // ── Hamburger button ──────────────────────
  hamburger: {
    flexDirection: 'column',
    gap: 5,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 8,
    borderRadius: 8,
  },

  bar: {
    display: 'block',
    width: 24,
    height: 2,
    background: '#0B1F3A',
    borderRadius: 2,
    transition: 'transform 0.3s ease, opacity 0.2s ease',
  },

  // ── Mobile dropdown ───────────────────────
  mobileMenuWrap: {
    position: 'absolute',
    top: 86, // Just below the pill navbar
    left: 24,
    right: 24,
    maxWidth: 1200,
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: 20,
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1000,
    overflow: 'hidden',
  },

  mobileMenuInner: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },

  mobileLink: {
    display: 'block',
    padding: '12px 16px',
    borderRadius: 12,
    fontSize: 16,
    fontFamily: "'Inter', 'Poppins', sans-serif",
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
}
