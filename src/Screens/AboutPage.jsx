import React, { useEffect } from "react";
import "../css/about.css";

const whoIAmLines = [
  "4th-year B.Eng. Electrical & Computer Engineering (ECCE) student at Sultan Qaboos University (Expected 2026)",
  "Focus: Embedded systems, networking, software-hardware integration",
  "Experience: 5+ years software self-learning/projects, 1+ year embedded/network practical work",
  "Interests: scalable systems, connected devices, cloud integration, AI-assisted features (learning/planning)",
];

const quickStats = [
  { value: "Final-year ECCE", label: "Academic Stage" },
  { value: "Embedded + Networking", label: "Focus Areas" },
  { value: "Muscat, Oman", label: "Location" },
  { value: "Expected 2026", label: "Graduation" },
];

const skill2s = [
  { name: "Embedded: ESP32, ATmega8, Raspberry Pi", level: 90 },
  { name: "Languages: C, C++, Python, JavaScript, SQL, HTML, CSS", level: 85 },
  { name: "Mobile: Flutter, Dart", level: 80 },
  { name: "Web: React.js, Node.js, PHP", level: 75 },
  { name: "Databases/Cloud: MySQL, Firebase, Google Cloud", level: 88 },
  { name: "Tools: Git, GitHub", level: 70 },
];

const experiences = [
  {
    title: "Smart Unmanned Surface Vehicle (USV)",
    company: "Seaguard 3000",
    period: "2025 - Present",
    description:
      "Embedded control, LTE connectivity, and live video streaming for an unmanned surface vehicle.",
    highlights: [
      "Designed ESP32 embedded control unit",
      "Remote control over 4G/LTE",
      "Camera integration + live video streaming",
      "Client-server communication with secure backend",
      "Network disconnection detection & recovery",
      "Planning: AI-assisted autonomy + security considerations",
    ],
  },
  {
    title: "Software Development Lead",
    company: "Mandoob Company",
    period: "2024 - 2025",
    description:
      "Led core software features for a delivery platform with mobile-first workflows.",
    highlights: [
      "Led software development for core features",
      "Flutter app with dual interfaces (drivers & businesses)",
      "AI-based delivery order recommendations",
      "Digital wallet system",
      "Thawani payment gateway integration",
    ],
  },
  {
    title: "Dual-Axis Solar Tracking System",
    company: "Course Project",
    period: "2025",
    description:
      "ATmega32-based dual-axis tracking prototype with sensor and servo control.",
    highlights: [
      "ATmega32-based dual-axis tracking prototype",
      "Light sensors + servo control",
      "Monitoring via LCD + UART",
    ],
  },
];

export default function () {

  return (
    <div className="aboutme-container">
      <div className="title-divider">About me</div>
      {/* Main About Section */}
      <div className="personal-container">
        {/* Personal Info */}
        <div className="personal-info" style={{}}>
          <h3 className="sph ">Who I Am</h3>
          <div className="spcard">
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              {whoIAmLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  - {line}
                  {index < whoIAmLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>


{/* Quick Stats */}
<div className="stat-container">
  <h3 className="sph" style={{ fontSize: "28px", marginBottom: "20px" }}>
    Quick Stats
  </h3>

  <div className="spcard">
    <div className="grid-stat stats-section"> {/* <— observe this */}
      {quickStats.map((stat, index) => (
        <div style={{ textAlign: "center" }} key={`${stat.label}-${index}`}>
          <h2 className="sph">{stat.value}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>

      {/* Skills Section */}
      <div style={{ marginBottom: "60px" }}>
        <h3
          className="sph"
          style={{
            marginBottom: "30px",
          }}
        >
          Technical Skills
        </h3>
        <div className="tech-grid" style={{}}>
          {skill2s.map((skill, index) => (
            <div key={index} className="spcard">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <h6>{skill.name}</h6>
                <span style={{ color: "#ffccb5" }}>{skill.level}%</span>
              </div>
              <div className="process">
                <div
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div>
        <h3
          className="sph"
          style={{
            marginBottom: "30px",
          }}
        >
          Professional Journey
        </h3>
        <div className="timeline-container" style={{}}>
          {/* Timeline Line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div
              className="timeline-card"
              key={index}
              style={{
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              {/* Timeline Node */}
              <div className="timeline-node" style={{}} />

              {/* Content Card */}
              <div
                className="timeline-content"
                style={{
                  marginLeft: index % 2 === 0 ? "0" : "auto",
                  marginRight: index % 2 === 0 ? "auto" : "0",
                }}
              >
                <h4
                  style={{
                    color: "#ffccb5",
                    fontSize: "20px",
                    marginBottom: "8px",
                  }}
                >
                  {exp.title}
                </h4>
                <div
                  style={{
                    color: "#a06043",
                    fontSize: "16px",
                    marginBottom: "5px",
                  }}
                >
                  {exp.company}
                </div>
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "14px",
                    marginBottom: "15px",
                  }}
                >
                  {exp.period}
                </div>
                <p style={{}}>{exp.description}</p>
                <div>
                  <h6
                    style={{
                      color: "#f8fafc",
                      marginBottom: "10px",
                    }}
                  >
                    Key Achievements:
                  </h6>
                  <ul className="timeline-ach">
                    {exp.highlights.map((achievement, achIndex) => (
                      <li key={achIndex}>
                        <span style={{}}>✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="spcard">
        <h3
          style={{
            color: "#b86d4a",
            fontSize: "24px",
            marginBottom: "20px",
            textShadow: "0 0 10px rgba(184, 109, 74, 0.5)",
          }}
        >
          Let's Work Together
        </h3>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.74)",
            fontSize: "16px",
            marginBottom: "30px",
            maxWidth: "600px",
            margin: "0 auto 30px",
          }}
        >
          I'm always excited to take on new challenges and collaborate on
          innovative projects. Let's bring your ideas to life!
        </p>
        <button
          id="works"
          style={{
            backgroundColor: "transparent",
            border: "#a06043 solid 2px",
            color: "#ffccb5",
            padding: "12px 30px",
            borderRadius: "25px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#a06043";
            e.target.style.color = "white";
            e.target.style.boxShadow =
              "0px 0px 35px -1px rgba(160, 96, 67, 0.72)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#ffccb5";
            e.target.style.boxShadow = "none";
          }}
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
}
