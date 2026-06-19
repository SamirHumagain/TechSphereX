import { Link } from "react-router-dom";
import "./Products.scss";
import { products } from "../data/product";

export default function Products() {
  return (
    <div className="products-page">
      <section className="page-hero">
        <div className="page-title-row">
          <div className="page-icon-badge">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
            </svg>
          </div>
          <h1>OUR PRODUCTS</h1>
        </div>
        <span className="subtitle">Platforms we've built and operate</span>
        <p>We build and run our own products alongside client projects.</p>
      </section>

      <section className="products-page__list">
        <div className="container">
          {products.map((p, i) => (
            <div
              key={i}
              className={`products-page__item ${p.right ? "products-page__item--right" : ""}`}
            >
              <div className="products-page__visual">
                <div className="products-page__img-box">
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fit-cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
              <div className="products-page__content">
                <span className="product-tag">{p.tag}</span>
                <h2>{p.title}</h2>
                <p>{p.desc}</p>
                <ul>
                  {p.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
                <Link to={`/products/${p.slug}`} className="btn-product">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products-page__cta">
        <div className="container">
          <h2>Need a Custom Product?</h2>
          <p>
            Whether you need a full-scale ERP, a niche SaaS product, or a mobile
            app, our team is ready to turn your vision into reality.
          </p>
          <div className="products-page__cta-btns">
            <Link to="/contact" className="btn-cta-primary">
              Start a Conversation
            </Link>
            <Link to="/services" className="btn-cta-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
