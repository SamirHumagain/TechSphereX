import { useParams, Link, Navigate } from "react-router-dom";
import "./ProductDetail.scss";
import foodiehologo from "../../public/foodieho_logo_new.webp";
import rewardizlogo from "../../public/rewardiz_logo_new.webp";
import spherecartlogo from "../../public/loopscart.png";

const productData = {
  foodieho: {
    name: "Foodieho",
    logo: foodiehologo,
    website: "https://foodieho.com/",
    tagline: "Modernize Your Restaurant.",
    heroDesc:
      "From kitchen to table, Foodieho streamlines your entire restaurant operation. Manage orders, inventory, and reservations with ease.",
    featuresLabel: "FEATURES",
    featuresTitle: "Served Hot & Fresh",
    features: [
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7M17 13l1.5 7M9 20h6" />
          </svg>
        ),
        title: "Order Management",
        desc: "Streamline incoming orders from dine-in, takeaway, and delivery channels.",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
        ),
        title: "Table Reservations",
        desc: "Smart booking system to manage seating and reduce wait times.",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        ),
        title: "Inventory Control",
        desc: "Track ingredients, reduce waste, and automate restocking.",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        ),
        title: "Kitchen Display",
        desc: "Digital KDS to improve communication between front and back of house.",
      },
    ],
    ctaTitle: "Take your restaurant to the next level?",
    ctaBtn: "Get Started with Foodieho",
    accentColor: "#00B4D8",
  },

  rewardiz: {
    name: "Rewardiz",
    logo: rewardizlogo,
    website: "https://rewardiz.com/",
    tagline: "Turn Customers into Loyal Fans.",
    heroDesc:
      "Rewardiz is the ultimate loyalty platform that helps businesses increase retention through customizable points systems, exciting scratch cards, and powerful referral programs.",
    featuresLabel: "FEATURES",
    featuresTitle: "Everything you need to grow",
    features: [
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2l2.5 7h7l-5.5 4 2 7-6-4-6 4 2-7-5.5-4h7z" />
          </svg>
        ),
        title: "Points & Rewards",
        desc: "Flexible earning rules including cashback, points per spend, and custom actions.",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="9" cy="7" r="3" />
            <circle cx="17" cy="7" r="3" />
            <path d="M2 21c0-3.5 4-6 7-6s7 2.5 7 6" />
          </svg>
        ),
        title: "Referral System",
        desc: "Viral growth through multi-level referral incentives that turn customers into advocates.",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
          </svg>
        ),
        title: "Gamified Experience",
        desc: "Engage users with Scratch Cards, Spin Wheels, and interactive challenges.",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="4" y1="19" x2="20" y2="19" />
            <rect x="6" y="10" width="3" height="6" />
            <rect x="11" y="7" width="3" height="9" />
            <rect x="16" y="12" width="3" height="4" />
          </svg>
        ),
        title: "Analytics Dashboard",
        desc: "Deep insights into customer behavior, retention rates, and campaign performance.",
      },
    ],
    ctaTitle: "Ready to launch your loyalty program?",
    ctaBtn: "Get Started with Rewardiz",
    accentColor: "#00B4D8",
  },

  spherecart: {
    name: "SphereCart",
    logo: spherecartlogo,
    website: "https://loopscart.com/",
    tagline: "Your E-commerce Growth Engine.",
    heroDesc:
      "LoopsCart provides everything you need to sell online. From inventory management to secure payments and advanced analytics.",
    featuresLabel: "FEATURES",
    featuresTitle: "Everything You Need to Sell",
    features: [
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
            <path d="M8 15h8" />
          </svg>
        ),
        title: "Storefront Builder",
        desc: "Create beautiful, responsive online stores with our intuitive builder.",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 10h20" />
            <circle cx="17" cy="15" r="1.5" />
          </svg>
        ),
        title: "Secure Payments",
        desc: "Integrated local and international payment gateways for seamless transactions.",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="9" cy="7" r="3" />
            <circle cx="17" cy="7" r="3" />
            <path d="M2 20c0-4 4-6 7-6s7 2 7 6" />
          </svg>
        ),
        title: "Vendor Management",
        desc: "Perfect for marketplaces. Manage multiple vendors, commissions, and payouts.",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="4 14 9 9 13 13 20 6" />
            <path d="M20 6v6h-6" />
          </svg>
        ),
        title: "Real-time Analytics",
        desc: "Track sales, visitors, and conversion rates to optimize your business.",
      },
    ],
    ctaTitle: "Ready to launch your online store?",
    ctaBtn: "Get Started with SphereCart",
    accentColor: "#00B4D8",
  },
};

export default function ProductDetail() {
  const { slug } = useParams();

  const product = productData[slug?.toLowerCase()];

  if (!product) return <Navigate to="/products" replace />;

  return (
    <div className="product-detail">
      {/* HERO */}
      <section className="product-detail__hero">
        <div className="product-detail__hero-inner container">
          <div className="product-detail__hero-text">
            <h1>{product.tagline}</h1>
            <p>{product.heroDesc}</p>

            <div className="product-detail__hero-btns">
              <a
                href={product.website}
                className="pd-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <Link to="/contact" className="pd-btn-outline">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* LOGO */}
          <div className="product-detail__hero-logo">
            <div className="product-detail__hero-logo-box">
              {product.logo ? (
                <img
                  src={product.logo}
                  alt={product.name}
                  className="product-detail__logo-img"
                />
              ) : (
                <strong>{product.name}</strong>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      {product.features.length > 0 && (
        <section className="product-detail__features">
          <div className="container">
            <p className="product-detail__features-label">
              {product.featuresLabel}
            </p>
            <h2 className="product-detail__features-title">
              {product.featuresTitle}
            </h2>

            <div className="product-detail__features-grid">
              {product.features.map((f, i) => (
                <div key={i} className="product-detail__feature-card">
                  <div className="product-detail__feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="product-detail__cta">
        <div className="container">
          <h2>{product.ctaTitle}</h2>
          <a
            href={product.website}
            className="pd-btn-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {product.ctaBtn}
          </a>
        </div>
      </section>

      {/* BACK */}
      <div className="product-detail__back container">
        <Link to="/products" className="product-detail__back-link">
          ← Back to all products
        </Link>
      </div>
    </div>
  );
}
