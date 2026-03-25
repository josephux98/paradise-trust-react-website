import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          // Replace YOUR_ACCESS_KEY with the key sent to your email
          access_key: "YOUR_ACCESS_KEY",
          subject: "New Message from Paradise Trust Website",
          from_name: form.name,
          ...form
        })
      })

      if (response.ok) {
        setSent(true)
        setForm({ name:'', email:'', phone:'', message:'' })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section style={S.section} className="contact-hero-animated-bg">
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
              <span>Get In Touch</span>
            </div>

            <h1 style={S.heading} className="fade-in fade-in-2">Contact Us</h1>
            
            <p style={S.paragraph} className="fade-in fade-in-3">
              Get in touch with Paradise Family &amp; Social Welfare Trust to learn more about our services, support our mission, or participate in community initiatives. We welcome volunteers, donors, and well-wishers who wish to help serve society.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={S.container}>

          {/* ── INFO CARDS ROW ────────────────────────── */}
          <div className="contact-info-grid fade-in fade-in-1">
            <div className="ci-card">
              <div className="ci-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h4 className="ci-title">Address</h4>
              <p className="ci-desc">
                Door No. D-21, Pvt. Bus Stand Building,<br/>
                South Chalakudy, Thrissur – 680307
              </p>
            </div>
            
            <div className="ci-card">
              <div className="ci-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <h4 className="ci-title">Phone</h4>
              <p className="ci-desc">
                +91 9846547907
              </p>
            </div>

            <div className="ci-card">
              <div className="ci-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <h4 className="ci-title">Email</h4>
              <p className="ci-desc">
                paradisefamilytrust@gmail.com
              </p>
            </div>
          </div>

          {/* ── FORM & MAP ROW ────────────────────────── */}
          <div className="contact-bottom-grid fade-in fade-in-2">
            <div className="cb-map">
              <iframe 
                src="https://maps.google.com/maps?q=Private%20Bus%20Stand%20Building,%20South%20Chalakudy,%20Thrissur%20-%20680307&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Paradise Family Trust Location"
              ></iframe>
            </div>

            <div className="cb-form-card">
            {sent ? (
              <div style={{textAlign:'center',padding:'60px 0'}}>
                <div style={{fontSize:56,marginBottom:20}}>✅</div>
                <h3 style={{fontFamily:"'Playfair Display', Georgia, serif",fontSize:28,color:'#0B1F3A',marginBottom:8}}>Thank you!</h3>
                <p style={{color:'#6B7280', fontSize: 16}}>We'll be in touch with you soon.</p>
                <button className="btn-submit" style={{marginTop:32, width:'auto'}} onClick={()=>setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 style={{fontFamily:"'Playfair Display', Georgia, serif",fontSize:28,fontWeight:700,color:'#0B1F3A',marginBottom:24}}>
                  Send us a message
                </h3>

                {[
                  {name:'name',   label:'Full Name',     type:'text',     required:true},
                  {name:'email',  label:'Email Address', type:'email',    required:true},
                  {name:'phone',  label:'Phone Number',  type:'tel',      required:false},
                ].map(field => (
                  <div key={field.name} className="form-group">
                    <label className="form-label">
                      {field.label} {field.required && <span style={{color:'#e53e3e'}}>*</span>}
                    </label>
                    <input
                      type={field.type} name={field.name}
                      value={form[field.name]} onChange={handle}
                      required={field.required} className="form-input"
                    />
                  </div>
                ))}

                <div className="form-group" style={{marginBottom:32}}>
                  <label className="form-label">
                    Message <span style={{color:'#e53e3e'}}>*</span>
                  </label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handle} required rows={5}
                    className="form-input" style={{resize:'vertical'}}
                  />
                </div>

                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? "Sending..." : "Send message"}
                  {!loading && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .contact-hero-animated-bg {
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

        /* Info Cards */
        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 64px;
        }
        .ci-card {
          background: #ffffff;
          border: 1px solid #E8EBF0;
          border-radius: 16px;
          padding: 40px 24px;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        .ci-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(11, 31, 58, 0.08);
          border-color: #0B1F3A;
        }
        .ci-icon {
          width: 64px;
          height: 64px;
          background: #F0F4FF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }
        .ci-card:hover .ci-icon {
          background: #0B1F3A;
          color: #ffffff;
          transform: scale(1.1);
        }
        .ci-icon i {
          font-size: 26px;
          color: #0B1F3A;
          transition: color 0.3s ease;
        }
        .ci-card:hover .ci-icon i {
          color: #ffffff;
        }
        .ci-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #0B1F3A;
          margin: 0 0 12px;
        }
        .ci-desc {
          font-size: 15px;
          color: #4B5563;
          line-height: 1.6;
          margin: 0;
        }

        /* Bottom Grid & Form */
        .contact-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
        }
        .cb-map {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E8EBF0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          min-height: 400px;
        }
        .cb-form-card {
          background: #ffffff;
          border: 1px solid #E8EBF0;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        .form-input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 8px;
          border: 1.5px solid #E8EBF0;
          font-family: 'Inter', 'Poppins', sans-serif;
          font-size: 15px;
          color: #0A1628;
          background: #F9FAFB;
          transition: all 0.2s ease;
          outline: none;
        }
        .form-input:focus {
          border-color: #0B1F3A;
          box-shadow: 0 0 0 3px rgba(11, 31, 58, 0.1);
          background: #ffffff;
        }
        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px 32px;
          border-radius: 999px;
          background: #0B1F3A;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', 'Poppins', sans-serif;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(11, 31, 58, 0.2);
        }
        .btn-submit:hover {
          background: #071529;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(11, 31, 58, 0.3);
        }
        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
          box-shadow: 0 4px 14px rgba(11, 31, 58, 0.2);
        }

        @media (max-width: 900px) {
          .contact-info-grid { grid-template-columns: 1fr; gap: 24px; }
          .contact-bottom-grid { grid-template-columns: 1fr; gap: 32px; }
          .cb-map { min-height: 350px; }
          .cb-form-card { padding: 32px 24px; }
        }
      `}</style>
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
