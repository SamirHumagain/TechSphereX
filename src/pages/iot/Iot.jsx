import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaTools,
  FaUsers,
  FaMicrochip,
  FaGraduationCap,
  FaRobot,
  FaWifi,
  FaBroadcastTower,
  FaServer,
  FaCogs,
  FaCheckCircle,
  FaQuestionCircle,
  FaCube,
  FaBolt,
  FaThermometerHalf,
  FaCar,
  FaEye,
  FaHome,
  FaSeedling,
  FaSun,
  FaArrowRight,
  FaChevronDown,
  FaTimes,
  FaLaptopCode,
} from "react-icons/fa";
import {
  courseHighlights,
  corePillars,
  courseProjects,
  arduinoVsEsp32,
  technicalPrimer,
  faqList,
} from "./iotData";
import "./Iot.scss";

export default function Iot() {
  const [activeNav, setActiveNav] = useState("overview");
  const [projectFilter, setProjectFilter] = useState("all");
  const [primerTab, setPrimerTab] = useState("electricity");
  const [activeFaq, setActiveFaq] = useState(null);
  const [faqCategory, setFaqCategory] = useState("All");

  // Demo Registration Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    background: "+2 Alumni",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Quick icon map helper
  const renderIcon = (name) => {
    switch (name) {
      case "FaClock":
        return <FaClock />;
      case "FaTools":
        return <FaTools />;
      case "FaUsers":
        return <FaUsers />;
      case "FaMicrochip":
        return <FaMicrochip />;
      case "FaGraduationCap":
        return <FaGraduationCap />;
      case "FaRobot":
        return <FaRobot />;
      default:
        return <FaMicrochip />;
    }
  };

  const projectIcons = {
    "smart-home": <FaHome />,
    "maze-robot": <FaRobot />,
    "greenhouse-pod": <FaSeedling />,
    "weather-station": <FaSun />,
    "bionic-eyes": <FaEye />,
    "rc-vehicle": <FaCar />,
  };

  const filteredProjects =
    projectFilter === "all"
      ? courseProjects
      : projectFilter === "robotics"
      ? courseProjects.filter((p) => p.category.includes("Robotics"))
      : courseProjects.filter((p) => !p.category.includes("Robotics"));

  const filteredFaqs =
    faqCategory === "All"
      ? faqList
      : faqList.filter((f) => f.category.includes(faqCategory));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  // Scroll spy to update active section in sub-navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "philosophy",
        "projects",
        "comparison",
        "primer",
        "faqs",
        "interest",
      ];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="iot-spa">
      {/* Sticky Sub-Navigation Bar */}
      <div className="iot-subnav">
        <div className="iot-subnav__inner">
          <div className="iot-subnav__brand">
            <FaMicrochip className="icon" />
            <span>IoT & Robotics Lab</span>
          </div>
          <div className="iot-subnav__links">
            {[
              { id: "overview", label: "Overview" },
              { id: "philosophy", label: "Sense-Think-Act" },
              { id: "projects", label: "The 6 Projects" },
              { id: "comparison", label: "Arduino vs ESP32" },
              { id: "primer", label: "Technical Primer" },
              { id: "faqs", label: "FAQs" },
            ].map(({ id, label }) => (
              <button
                key={id}
                className={`subnav-btn ${activeNav === id ? "active" : ""}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            className="subnav-cta"
            onClick={() => scrollToSection("interest")}
          >
            Express Interest
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section id="overview" className="iot-hero">
        <div className="container">
          <div className="iot-hero__badge">
            <span className="dot"></span> 2-Month Hands-On Practical Program
          </div>
          <h1 className="iot-hero__title">
            Build Real Robots & <br />
            <span>Smart Connected Devices</span>
          </h1>
          <p className="iot-hero__tagline">
            "You already know the <em>think</em> part. This course adds <em>sense</em>, <em>act</em>, and <em>connect</em>."
          </p>
          <p className="iot-hero__desc">
            A 60–70% practical, laboratory-driven course designed for Bachelor's students, +2 graduates, and software developers transitioning into hardware, embedded firmware, robotics, and IoT.
          </p>

          <div className="iot-hero__actions">
            <button
              className="btn-primary-glow"
              onClick={() => scrollToSection("interest")}
            >
              Express Your Interest <FaArrowRight />
            </button>
            <button
              className="btn-secondary-outline"
              onClick={() => scrollToSection("projects")}
            >
              Explore 6 Projects
            </button>
          </div>

          {/* Quick Highlights Grid */}
          <div className="iot-hero__highlights">
            {courseHighlights.map((item, idx) => (
              <div key={idx} className="highlight-card">
                <div className="highlight-card__icon">
                  {renderIcon(item.icon)}
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION: SENSE - THINK - ACT - CONNECT */}
      <section id="philosophy" className="iot-philosophy">
        <div className="container">
          <div className="section-header">
            <span className="section-label">THE CORE IDEA</span>
            <h2>How Every Smart Device Operates</h2>
            <p>
              Smart hardware is not magic. Every smart gadget and autonomous robot on earth breaks down into four fundamental layers:
            </p>
          </div>

          <div className="formula-banner">
            <div className="formula-item">
              <span className="tech-badge">SOFTWARE</span>
              <span className="tech-val">Think</span>
            </div>
            <span className="formula-operator">+</span>
            <div className="formula-item">
              <span className="tech-badge">IOT</span>
              <span className="tech-val">Sense + Think + Connect</span>
            </div>
            <span className="formula-operator">+</span>
            <div className="formula-item">
              <span className="tech-badge">ROBOTICS</span>
              <span className="tech-val">Sense + Think + Act</span>
            </div>
            <span className="formula-operator">=</span>
            <div className="formula-item highlight">
              <span className="tech-badge">THIS COURSE</span>
              <span className="tech-val">All 4 Combined</span>
            </div>
          </div>

          <div className="pillars-grid">
            {corePillars.map((pillar) => (
              <div key={pillar.id} className="pillar-card">
                <div className="pillar-card__top">
                  <span className="pillar-tag">{pillar.tag}</span>
                  <div className="pillar-icon">
                    {pillar.id === "sense" && <FaThermometerHalf />}
                    {pillar.id === "think" && <FaMicrochip />}
                    {pillar.id === "act" && <FaCogs />}
                    {pillar.id === "connect" && <FaWifi />}
                  </div>
                </div>
                <h3>{pillar.title}</h3>
                <span className="pillar-sub">{pillar.subtitle}</span>
                <p>{pillar.desc}</p>
                <div className="pillar-examples">
                  <span className="example-title">Key Components:</span>
                  <ul>
                    {pillar.examples.map((ex, i) => (
                      <li key={i}>
                        <FaCheckCircle className="check-icon" /> {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE 6 PROJECTS SECTION */}
      <section id="projects" className="iot-projects">
        <div className="container">
          <div className="section-header">
            <span className="section-label">HANDS-ON PORTFOLIO</span>
            <h2>The Six Real-World Projects You Build</h2>
            <p>
              Leave theory on the whiteboard. Every student builds, wires, programs, and troubleshoots these working systems with their teammates.
            </p>

            <div className="project-filter-buttons">
              <button
                className={`filter-btn ${projectFilter === "all" ? "active" : ""}`}
                onClick={() => setProjectFilter("all")}
              >
                All 6 Projects
              </button>
              <button
                className={`filter-btn ${projectFilter === "robotics" ? "active" : ""}`}
                onClick={() => setProjectFilter("robotics")}
              >
                Robotics & Autonomy
              </button>
              <button
                className={`filter-btn ${projectFilter === "iot" ? "active" : ""}`}
                onClick={() => setProjectFilter("iot")}
              >
                IoT & Connected Systems
              </button>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="project-card">
                <div className="project-card__header">
                  <div className="project-icon-box">
                    {projectIcons[proj.id] || <FaMicrochip />}
                  </div>
                  <div>
                    <span className="project-badge">{proj.badge}</span>
                    <span className="project-cat">{proj.category}</span>
                  </div>
                </div>

                <h3>{proj.title}</h3>
                <p className="project-summary">{proj.summary}</p>

                <div className="project-skills">
                  <h4>What You Master:</h4>
                  <ul>
                    {proj.skillsLearned.map((skill, si) => (
                      <li key={si}>
                        <FaCheckCircle className="check" /> {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-parts">
                  <h4>Typical Hardware Used:</h4>
                  <div className="parts-tags">
                    {proj.components.map((part, pi) => (
                      <span key={pi} className="part-tag">
                        {part}
                      </span>
                    ))}
                  </div>
                </div>

                {proj.id === "bionic-eyes" && (
                  <div className="demo-highlight-note">
                    <FaEye /> <strong>Live Working Model:</strong> The instructor has built an animatronic working prototype to study multi-servo kinematics in the lab!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARDUINO VS ESP32 COMPARISON SECTION */}
      <section id="comparison" className="iot-comparison">
        <div className="container">
          <div className="section-header">
            <span className="section-label">DUAL PLATFORM APPROACH</span>
            <h2>Why Both Arduino & ESP32?</h2>
            <p>
              We start on Arduino to build unshakable electronics fundamentals, then upgrade to ESP32 for high-speed Wi-Fi IoT. Both use the same Arduino C/C++ environment, so no skills are ever wasted.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Architecture Feature</th>
                  <th className="th-arduino">
                    <span className="chip-badge">Arduino Uno / Nano</span>
                  </th>
                  <th className="th-esp32">
                    <span className="chip-badge esp">ESP32 Dual-Core</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {arduinoVsEsp32.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="feat-col">{row.feature}</td>
                    <td className="arduino-col">{row.arduino}</td>
                    <td className="esp32-col">{row.esp32}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="synergy-box">
            <div className="synergy-icon">
              <FaCogs />
            </div>
            <div className="synergy-text">
              <h4>Real Project Synergy Example: Maze-Solving Robot</h4>
              <p>
                In advanced projects, the two chips can work in harmony! The <strong>Arduino</strong> handles hard real-time autonomous motor driving and sensor reads, while the <strong>ESP32</strong> simultaneously hosts a responsive web server to stream live telemetry and receive remote steering commands over Wi-Fi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL PRIMER SECTION */}
      <section id="primer" className="iot-primer">
        <div className="container">
          <div className="section-header">
            <span className="section-label">PLAIN LANGUAGE EXPLANATIONS</span>
            <h2>Technical Primer: Hardware De-Mystified</h2>
            <p>
              We translate abstract electrical concepts into intuitive mental models so you can build with confidence without getting bogged down in university math.
            </p>

            <div className="primer-nav">
              <button
                className={`primer-tab-btn ${primerTab === "electricity" ? "active" : ""}`}
                onClick={() => setPrimerTab("electricity")}
              >
                <FaBolt /> Electricity in Plain English
              </button>
              <button
                className={`primer-tab-btn ${primerTab === "concepts" ? "active" : ""}`}
                onClick={() => setPrimerTab("concepts")}
              >
                <FaTools /> Breadboarding, Motor Drivers & 3D Lab
              </button>
            </div>
          </div>

          {primerTab === "electricity" && (
            <div className="primer-content-grid">
              {technicalPrimer.electricity.map((item, i) => (
                <div key={i} className="primer-card">
                  <div className="primer-card__top">
                    <span className="term-badge">{item.term}</span>
                    <span className="analogy-pill">Analogy: {item.analogy}</span>
                  </div>
                  <p>{item.explanation}</p>
                </div>
              ))}
            </div>
          )}

          {primerTab === "concepts" && (
            <div className="primer-concepts-grid">
              {technicalPrimer.hardwareConcepts.map((item, i) => (
                <div key={i} className="concept-card">
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="iot-faqs">
        <div className="container">
          <div className="section-header">
            <span className="section-label">ANSWERS & CLARIFICATIONS</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Everything you need to know about course safety, prerequisites, kits, and career paths.
            </p>

            <div className="faq-category-nav">
              {["All", "Prerequisites", "Safety", "Hardware", "Career"].map((cat) => (
                <button
                  key={cat}
                  className={`faq-cat-btn ${faqCategory === cat ? "active" : ""}`}
                  onClick={() => setFaqCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="faq-accordion-list">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <div className="faq-item__header">
                    <div className="faq-item__title">
                      <FaQuestionCircle className="faq-q-icon" />
                      <span>{faq.question}</span>
                    </div>
                    <FaChevronDown className={`chevron ${isOpen ? "rotate" : ""}`} />
                  </div>
                  {isOpen && (
                    <div className="faq-item__body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPRESS INTEREST & REGISTRATION SECTION */}
      <section id="interest" className="iot-register">
        <div className="container">
          <div className="register-wrapper">
            <div className="register-info">
              <span className="section-label">UPCOMING COHORT</span>
              <h2>Interested in Joining?</h2>
              <p>
                Take your skills from screen to hardware. Express your interest today to receive early notifications on upcoming batch dates, venue details, and fee structure.
              </p>

              <div className="demo-perks">
                <div className="perk-item">
                  <FaUsers className="perk-icon" />
                  <div>
                    <strong>Small Batch Size (10–15 Students)</strong>
                    <p>Limited seats ensure direct instructor mentorship and quality teamwork.</p>
                  </div>
                </div>
                <div className="perk-item">
                  <FaTools className="perk-icon" />
                  <div>
                    <strong>Shared Hardware Kits Provided</strong>
                    <p>Hands-on access to microcontrollers, sensors, actuators, and chassis during lab sessions.</p>
                  </div>
                </div>
                <div className="perk-item">
                  <FaEye className="perk-icon" />
                  <div>
                    <strong>Real Working Prototypes</strong>
                    <p>Interact with animatronic bionic eyes, maze robots, and in-house 3D printing equipment.</p>
                  </div>
                </div>
              </div>

              <div className="status-notice">
                <span>Fee, start date & batch schedule will be announced soon to registered candidates.</span>
              </div>
            </div>

            <div className="register-form-box">
              {isSubmitted ? (
                <div className="submitted-state">
                  <FaCheckCircle className="success-icon" />
                  <h3>Interest Registered!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. We've recorded your interest. Our academic coordinator will contact you at <strong>{formData.phone}</strong> as soon as the batch dates, venue, and fee details are finalized.
                  </p>
                  <button
                    className="btn-primary-glow"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        background: "+2 Alumni",
                        message: "",
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="register-form">
                  <h3>Express Your Interest</h3>
                  <p>Zero commitment. Let us know you're interested and we'll keep you in the loop.</p>

                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="98XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Current Background / Education</label>
                    <select
                      value={formData.background}
                      onChange={(e) =>
                        setFormData({ ...formData, background: e.target.value })
                      }
                    >
                      <option value="+2 Alumni">+2 Science / Computer Alumni</option>
                      <option value="Bachelor IT / CS">Bachelor's IT / Computer Science</option>
                      <option value="Engineering Student">Electronics / Mechanical Engineering</option>
                      <option value="Software Developer">Working Software Developer / Coder</option>
                      <option value="Hobbyist / Other">Tech Enthusiast / Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Any Questions or Specific Interests?</label>
                    <textarea
                      rows="3"
                      placeholder="e.g., Interested in maze robots and IoT sensors..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit">
                    Submit My Interest <FaArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALLOUT */}
      <div className="iot-bottom-bar">
        <div className="container">
          <p>
            Have organizational or custom corporate training inquiries?{" "}
            <Link to="/contact">Contact TechSphereX Directly</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
