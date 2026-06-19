import { Link } from "react-router-dom";
import "./Home.scss";
import TeamImg from "../../public/teamwork.jpg";
import foodiehoImg from "../../public/foodieho.png";
import rewardizImg from "../../public/Rewardiz.jpg";
import loopscartImg from "../../public/loopscart.png";
import { products } from "../data/product";
import Products from "./Products";
import { services } from "../data/servicesdata.jsx";
import Services from "./Services";
import { expertise } from "../data/expertise.js";
import ClientsCarousel from "../components/ClientsCarousel.jsx";
import Contact from "./Contact.jsx";

const clients = [
  { name: "Rewardiz", logo: "../../public/Rewardiz.jpg" },
  { name: "Foodieho", logo: "../../public/foodieho.png" },
  { name: "Loopscart", logo: "../../public/loopscart.png" },
  { name: "Rewardiz", logo: "../../public/Rewardiz.jpg" },
  { name: "Foodieho", logo: "../../public/foodieho.png" },
  { name: "Loopscart", logo: "../../public/loopscart.png" },
];

export default function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-content">
          <p className="home__hero-eyebrow">Your Trusted Partner in</p>
          <h1 className="home__hero-title">DIGITAL INNOVATION</h1>
          <p className="home__hero-desc">
            Collaborating with you to deliver solutions that drive real business
            results. Whether you're modernizing legacy systems, building new
            digital products, or scaling existing platforms, our team helps you
            plan, build, and ship.
          </p>
          <Link to="/contact" className="btn-primary">
            Let's Start a Conversation
          </Link>
        </div>
        <div className="home__hero-visual">
          <div className="home__hero-globe">
            <img src="/logo.jpeg" alt="TechSphereX" />
          </div>
        </div>
      </section>
      {/* ABOUT SNAPSHOT */}
      <section className="home__about">
        <div className="container">
          <div className="home__about-inner">
            <div className="home__about-visual">
              <div className="home__about-illustration">
                <img
                  src={TeamImg}
                  alt="Teamwork"
                  style={{ filter: "brightness(80%)", borderRadius: "10px" }}
                />
              </div>
            </div>
            <div className="home__about-text">
              <div className="section-badge">⬡ ABOUT US</div>
              <h2>Leading the Way in IT Services</h2>
              <p>
                We design and build scalable software solutions across web,
                mobile, and cloud. Our team combines technical expertise with
                agile delivery to help organizations launch faster, build
                products faster, streamline operations, and create better
                digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home__services">
        <Services />
      </section>
      {/* EXPERTISE */}
      <section className="home__expertise">
        <div className="container">
          <div className="section-header">
            <span className="section-label">OUR EXPERTISE</span>
          </div>
          <div className="home__expertise-grid">
            {expertise.map((e, i) => (
              <div key={i} className="home__expertise-badge">
                <img
                  src={e.icon}
                  alt={e.name}
                  className="home__expertise-icon"
                />
                <span>{e.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home__products">
        <Products />
      </section>

      <section className="home__clients">
        <div className="container">
          <div className="section-header">
            <span className="section-label">OUR CLIENTS</span>
          </div>
          <p className="home__clients-sub">
            Trusted by innovative companies across the globe to deliver
            high-impact digital solutions
          </p>
          <ClientsCarousel clients={clients} />
        </div>
      </section>

      <section className="home__contact-cta">
        {/* <div className="container">
          <div className="section-header">
            <span className="section-label">CONTACT US</span>
          </div>
          <div className="home__contact-inner">
            <div className="home__contact-info">
              <div className="home__contact-card">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Drop a Line</h4>
                  <p>info@techspherex.com</p>
                </div>
              </div>
              <div className="home__contact-card">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Give us a Call</h4>
                  <p>+977-982-3821451</p>
                </div>
              </div>
              <div className="home__contact-card">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Find us Here</h4>
                  <p>Ekantakuna Road, Lalitpur, Nepal</p>
                </div>
              </div>
            </div>

            <div className="home__contact-form">
              <h3>Let's talk about your next project</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="" />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" placeholder="" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={4} placeholder=""></textarea>
              </div>
              <button className="btn-submit" type="button">
                Send Message
              </button>
            </div>
          </div>
        </div> */}
        <Contact />
      </section>
    </div>
  );
}
