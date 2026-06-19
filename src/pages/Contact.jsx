import "./Contact.scss";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-title-row">
          <div className="page-icon-badge">
            <svg viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <h1>CONTACT US</h1>
        </div>
        <span className="subtitle">Let's Start a Conversation</span>
        <p>
          Have a question or a project in mind? We'd love to hear from you. Get
          in touch with our team today.
        </p>
      </section>

      <section className="contact-page__body">
        <div className="container">
          <div className="contact-page__inner">
            <div className="contact-page__info">
              <div className="contact-page__info-card">
                <div className="contact-page__info-icon">
                  {" "}
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Drop a Line</h4>
                  <p>info@techspherex.com</p>
                </div>
              </div>
              <div className="contact-page__info-card">
                <div className="contact-page__info-icon">
                  {" "}
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4>Give us a Call</h4>
                  <p>+977-982-3821451</p>
                </div>
              </div>
              <div className="contact-page__info-card">
                <div className="contact-page__info-icon">
                  {" "}
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Find us Here</h4>
                  <p>Ekantakuna Road, Lalitpur</p>
                </div>
              </div>
            </div>

            <div className="contact-page__form-box">
              <h3>Leave us a Message</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5}></textarea>
              </div>
              <button className="contact-page__send-btn" type="button">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
