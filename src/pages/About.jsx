import './About.scss'

const coreValues = [
  { icon: '🚀', title: 'Innovation First', desc: 'We stay ahead of the curve, leveraging the latest technologies to solve complex problems.' },
  { icon: '🤝', title: 'Client Centric', desc: 'Your success is our success. We build lasting partnerships through transparency and results.' },
  { icon: '💻', title: 'Excellence in Code', desc: 'We take pride in writing clean, scalable, and maintainable software that stands the test of time.' },
  { icon: '🌍', title: 'Global Vision', desc: 'Based in Nepal, serving the world. We bring local talent to the global stage.' },
]

export default function About() {
  return (
    <div className="about">
      <section className="page-hero">
        <div className="page-title-row">
          <div className="page-icon-badge">
            <svg viewBox="0 0 24 24"><path d="M20 4l-8 4-8-4v2l8 4 8-4V4z"/></svg>
          </div>
          <h1>ABOUT TECHSPHEREX</h1>
        </div>
        <span className="subtitle">Innovating the Digital Frontier</span>
        <p>We are a team of passionate creators, engineers, and problem-solvers dedicated to building software that empowers businesses and improves lives.</p>
      </section>

      <section className="about__mission-vision">
        <div className="container">
          <div className="about__mv-grid">
            <div className="about__mv-cards">
              <div className="about__mv-card">
                <h3>Our Mission</h3>
                <p>To empower businesses globally by providing innovative, scalable, and high-quality software solutions that drive efficiency and growth.</p>
              </div>
              <div className="about__mv-card">
                <h3>Our Vision</h3>
                <p>To be a global leader in software innovation, recognized for our commitment to excellence, integrity, and the success of our partners and people.</p>
              </div>
            </div>
            <div className="about__mv-illustration">
              <div className="about__mv-visual">
                <span>👩‍💻</span>
                <span>🖥️</span>
                <span>🌐</span>
                <span>⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about__values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="about__values-sub">The principles that guide every line of code we write.</p>
          <div className="about__values-grid">
            {coreValues.map((v, i) => (
              <div key={i} className="about__value-card">
                <span className="about__value-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about__story">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="about__story-content">
            <p className="about__story-lead">
              Founded with a vision to bridge the gap between complex business challenges and elegant software solutions, TechSphereX has grown from a small passionate team into a full-service software powerhouse.
            </p>
            <p className="about__story-body">
              Based in the heart of Lalitpur, we have successfully delivered over 100 projects across various industries including E-commerce, Fintech, and Hospitality. Our journey is defined by continuous learning, technical excellence, and a deep-seated desire to put Nepal on the global tech map.
            </p>
            <a href="#" className="btn-outline-round">Our Work</a>
          </div>
        </div>
      </section>
    </div>
  )
}
