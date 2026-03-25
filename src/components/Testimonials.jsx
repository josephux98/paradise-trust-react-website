import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Import images so the bundler can process them
import person1 from "../assets/img/images/person-f-8.jpeg";
import person2 from "../assets/img/images/person-m-9.jpeg";
import person3 from "../assets/img/images/person-f-10.jpeg";
import person4 from "../assets/img/images/person-m-7.jpeg";

export default function Testimonials() {
  return (
    <>
      <section style={S.section}>
        <div style={S.container}>

          {/* TITLE */}
          <div style={S.sectionTitle}>
            <h2 style={S.sectionH2}>Testimonials</h2>
            <p style={S.sectionP}>What people say about our work</p>
          </div>

          {/* SLIDER */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
            speed={800}
            className="testimonial-slider"
          >

            {/* SLIDE 1 */}
            <SwiperSlide>
              <TestimonialCard
                title="They treated my father like their own"
                text1="When my family was struggling to care for my elderly father, the trust stepped in with kindness and patience. The care they provide is not just physical, but emotional too."
                text2="Their dedication and compassion changed our lives. I will always be grateful."
                name="Anitha R."
                role="Daughter of Beneficiary"
                img={person1}
              />
            </SwiperSlide>

            {/* SLIDE 2 */}
            <SwiperSlide>
              <TestimonialCard
                title="Hope when we had nowhere to turn"
                text1="I was suffering from a long-term illness and could not afford treatment. This trust helped me when I had no one else."
                text2="They treated me as a person, not a number. I feel hopeful again."
                name="Suresh K."
                role="Medical Aid Beneficiary"
                img={person2}
              />
            </SwiperSlide>

            {/* SLIDE 3 */}
            <SwiperSlide>
              <TestimonialCard
                title="A second chance through education"
                text1="Because of this trust, I continued my studies when my family couldn't support me."
                text2="Their encouragement helped me focus on my dreams and build a better future."
                name="Neha P."
                role="Student Beneficiary"
                img={person3}
              />
            </SwiperSlide>

            {/* SLIDE 4 */}
            <SwiperSlide>
              <TestimonialCard
                title="True service to the community"
                text1="I have seen how this trust works for the poor, elderly, and women in our community."
                text2="They serve without expecting anything in return. I am proud to support them."
                name="Joseph M."
                role="Community Volunteer"
                img={person4}
              />
            </SwiperSlide>

          </Swiper>
        </div>
      </section>

      {/* Hover + responsive styles */}
      <style>{`
        /* Add padding to swiper so shadow and arrows aren't clipped */
        .testimonial-slider {
          padding: 20px 20px 80px 20px !important;
          margin: -20px -20px 0 -20px !important;
        }

        /* Ensure all slides stretch to the exact same height */
        .testimonial-slider .swiper-slide {
          height: auto !important;
          display: flex;
        }

        /* Hover effect for the card */
        .testimonial-card-inner:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 16px 40px rgba(11,31,58,0.12) !important;
        }

        /* RESPONSIVE */
        @media (max-width: 800px) {
          .testimonial-card-inner {
            flex-direction: column-reverse !important;
            padding: 32px 24px !important;
            gap: 32px !important;
          }
          .testimonial-image-col {
            width: 100% !important;
            max-width: 240px !important;
          }
        }
      `}</style>
    </>
  );
}

/* CARD COMPONENT */
function TestimonialCard({ title, text1, text2, name, role, img }) {
  return (
    <div style={S.card} className="testimonial-card-inner">
      <div style={S.textCol}>
        <h2 style={S.cardH2}>{title}</h2>
        <p style={S.cardP}>{text1}</p>
        <p style={S.cardP}>{text2}</p>

        <div style={S.profile}>
          <img src={img} alt={name} style={S.profileImg} />
          <div>
            <h4 style={S.profileName}>{name}</h4>
            <span style={S.profileRole}>{role}</span>
          </div>
        </div>
      </div>

      <div style={S.imageCol} className="testimonial-image-col">
        <img src={img} alt={name} style={S.mainImg} />
      </div>
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────
const S = {
  section: {
    background: '#ffffff',
    padding: '96px 24px',
  },

  container: {
    maxWidth: 960, // Shrunk to avoid maximum whitespace
    margin: '0 auto',
  },

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

  // ── Card ────────────────────────────────
  card: {
    background: '#fff',
    borderRadius: 20,
    padding: '48px 56px',
    display: 'flex',
    alignItems: 'center',
    gap: 48,
    height: '100%',
    boxSizing: 'border-box',
    boxShadow: '0 4px 24px rgba(11,31,58,0.06)',
    border: '1px solid #E8EBF0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },

  textCol: {
    flex: 1,
  },

  cardH2: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 24,
    fontWeight: 700,
    color: '#0B1F3A',
    marginBottom: 16,
    lineHeight: 1.3,
  },

  cardP: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 1.8,
    marginBottom: 16,
  },

  profile: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 24,
    gap: 14,
  },

  profileImg: {
    width: 54,
    height: 54,
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'top', /* Ensures faces stay visible if cropped in the circle */
    border: '2px solid #DDE5F5',
  },

  profileName: {
    fontSize: 15,
    fontWeight: 700,
    color: '#0B1F3A',
    marginBottom: 2,
  },

  profileRole: {
    fontSize: 13,
    color: '#6B7280',
  },

  imageCol: {
    flexShrink: 0,
    width: 240, // Made image much smaller
  },

  mainImg: {
    width: '100%',
    height: 240,
    objectFit: 'cover',
    objectPosition: 'top center',
    backgroundColor: '#fff',
    borderRadius: 16,
    border: '1px solid #DDE5F5',
    boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
  },
}