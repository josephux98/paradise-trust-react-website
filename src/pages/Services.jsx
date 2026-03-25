import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <>
      <section style={S.section} className="services-hero-animated-bg">
        {/* ── BACKGROUND ANIMATED VERTICAL LINES ────────── */}
        <div className="hero-bg-line v-line-1"></div>
        <div className="hero-bg-line v-line-2"></div>
        <div className="hero-bg-line v-line-3"></div>
        <div className="hero-bg-line v-line-4"></div>
        <div className="hero-bg-line v-line-5"></div>
        <div className="hero-bg-line v-line-6"></div>

        {/* ── BACKGROUND ANIMATED HORIZONTAL LINES ──────── */}
        <div className="hero-bg-line-h h-line-1"></div>
        <div className="hero-bg-line-h h-line-2"></div>
        <div className="hero-bg-line-h h-line-3"></div>
        <div className="hero-bg-line-h h-line-4"></div>
        <div className="hero-bg-line-h h-line-5"></div>
        <div className="hero-bg-line-h h-line-6"></div>

        <div style={S.container}>
          <div style={S.contentWrapper}>
            <div style={S.pill} className="fade-in fade-in-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0B1F3A" style={{flexShrink:0}}>
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
              </svg>
              <span>What We Do</span>
            </div>

            <h1 style={S.heading} className="fade-in fade-in-2">Our Services &amp; Programs</h1>
            
            <p style={S.paragraph} className="fade-in fade-in-3">
              Paradise Family and Social Welfare Trust provides elderly care through Snehakoodaram, supports education, medical aid, food assistance, women empowerment programs, and community welfare initiatives serving poor, vulnerable families across Chalakudy.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .services-hero-animated-bg {
          background: linear-gradient(-45deg, #D9E8FC, #FFEBEE, #E5ECF6, #F4F6F9, #FFF2F5);
          background-size: 400% 400%;
          animation: gradient-bg 15s ease infinite;
        }

        /* Vertical Lines */
        @keyframes hero-line-slide {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .hero-bg-line {
          position: absolute; top: 0; bottom: 0; width: 1px;
          background: rgba(11, 31, 58, 0.05); overflow: hidden; z-index: 0;
        }
        .hero-bg-line::after {
          content: ''; display: block; position: absolute; height: 15vh; width: 100%; top: -50%; left: 0;
          background: linear-gradient(to bottom, rgba(11,31,58,0) 0%, rgba(11,31,58,0.2) 75%, rgba(11,31,58,0) 100%);
          animation: hero-line-slide 7s 0s infinite forwards;
        }
        .v-line-1 { left: 15%; } .v-line-1::after { animation-delay: 0s; }
        .v-line-2 { left: 30%; } .v-line-2::after { animation-delay: 2.5s; }
        .v-line-3 { left: 45%; } .v-line-3::after { animation-delay: 5s; }
        .v-line-4 { left: 60%; } .v-line-4::after { animation-delay: 1.5s; }
        .v-line-5 { left: 75%; } .v-line-5::after { animation-delay: 4.5s; }
        .v-line-6 { left: 90%; } .v-line-6::after { animation-delay: 3s; }

        /* Horizontal Lines */
        @keyframes hero-line-slide-h {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        .hero-bg-line-h {
          position: absolute; left: 0; right: 0; height: 1px;
          background: rgba(11, 31, 58, 0.05); overflow: hidden; z-index: 0;
        }
        .hero-bg-line-h::after {
          content: ''; display: block; position: absolute; width: 15vw; height: 100%; left: -50%; top: 0;
          background: linear-gradient(to right, rgba(11,31,58,0) 0%, rgba(11,31,58,0.2) 75%, rgba(11,31,58,0) 100%);
          animation: hero-line-slide-h 8s 0s infinite forwards;
        }
        .h-line-1 { top: 15%; } .h-line-1::after { animation-delay: 1s; }
        .h-line-2 { top: 30%; } .h-line-2::after { animation-delay: 3.5s; }
        .h-line-3 { top: 45%; } .h-line-3::after { animation-delay: 6s; }
        .h-line-4 { top: 60%; } .h-line-4::after { animation-delay: 2.5s; }
        .h-line-5 { top: 75%; } .h-line-5::after { animation-delay: 5.5s; }
        .h-line-6 { top: 90%; } .h-line-6::after { animation-delay: 4s; }
      `}</style>

      <ServiceCard 
        icon="bi-heart-fill" 
        title="Example Service" 
        description="This is an example service card." 
        features={['Feature 1', 'Feature 2', 'Feature 3']} 
      />
    </>
  )
}

const S = {
  section: {
    paddingTop: 'calc(100px + 4rem)',
    paddingBottom: 80,
    paddingLeft: 24,
    paddingRight: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: 1100,
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  contentWrapper: {
    maxWidth: 800,
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    textTransform: 'uppercase',
  },
  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 700,
    color: '#0A1628',
    lineHeight: 1.15,
    marginBottom: 24,
  },
  paragraph: {
    fontSize: 'clamp(15px, 2vw, 18px)',
    color: '#4B5563',
    lineHeight: 1.8,
  },
}
