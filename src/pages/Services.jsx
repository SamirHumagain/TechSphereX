import "./Services.scss";
import { services } from "../data/servicesdata.jsx";

export default function Services() {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="page-title-row">
          <div className="page-icon-badge">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1>OUR SERVICES</h1>
        </div>
        <span className="subtitle">
          End-to-end technology services for your business
        </span>
        <p>
          From idea to production, we help you design, build, and maintain
          modern software systems.
        </p>
      </section>

      <section className="services-page__grid-section">
        <div className="container">
          <div className="services-page__grid">
            {services.map((s, i) => (
              <div key={i} className="services-page__card">
                <span className="services-page__icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
