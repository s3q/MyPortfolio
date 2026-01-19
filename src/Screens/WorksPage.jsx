import React, { useEffect, useState } from "react";
import "../css/works.css";
import proj1 from "../assets/proj/proj1.jpg";
import proj2 from "../assets/proj/proj2.jpg";
import proj3 from "../assets/proj/proj3.jpg";
import proj4 from "../assets/proj/proj4.png";

const achievements = [
  {
    year: "Current",
    title: "Codeforces Rating: 852",
    description: "Active practice in competitive programming and problem solving.",
    category: "Competitive Programming",
  },
  {
    year: "Current",
    title: "Open-Source Participation",
    description: "Active GitHub contributor and community involvement.",
    category: "Community",
  },
];
const achievementsIntro = "Highlights from competitive programming and open-source work.";
const projectAvailability = {
  value: "Open to Collaboration",
  label: "Availability",
};
const isValidUrl = (url) => Boolean(url && url !== "#");
const projects = [
  {
    id: 1,
    title: "Smart USV Control System",
    category: "systems",
    image: proj1,
    description:
      "ESP32-based remote control over LTE with live video streaming and recovery handling.",
    technologies: ["ESP32", "LTE", "Networking", "Streaming", "Embedded"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Dual-Axis Solar Tracking System",
    category: "embedded",
    image: proj2,
    description:
      "Dual-axis sun tracking using sensors and servo control with UART/LCD monitoring.",
    technologies: ["ATmega32", "ADC", "PWM", "UART", "Embedded"],
    liveUrl: "#",
    githubUrl: "https://github.com/s3q/DualAxisSolarTrackingSolarPanel",
    featured: true,
  },
  {
    id: 3,
    title: "ECG Signal Processing Project (2024)",
    category: "signal",
    image: proj3,
    description:
      "Built ECG circuit and processed signals using bandpass filtering; studied noise and artifacts.",
    technologies: ["Signal Processing", "Biomedical", "Filtering"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Trippoint - Tourism Mobile App (2022-2023)",
    category: "mobile",
    image: proj4,
    description:
      "Mobile app connecting tourists with local businesses and events in Oman (stopped due to operational losses).",
    technologies: ["Flutter", "Mobile App", "Oman"],
    liveUrl: "#",
    githubUrl: "https://github.com/s3q/app",
    featured: false,
  },
];

const projectStats = {
  totalProjects: projects.length,
  featuredWorks: projects.filter((p) => p.featured).length,
  technologiesUsed: new Set(projects.flatMap((p) => p.technologies)).size,
};

const categories = [
  { key: "all", label: "All Projects", count: projects.length },
  {
    key: "featured",
    label: "Featured",
    count: projects.filter((p) => p.featured).length,
  },
  {
    key: "systems",
    label: "Systems",
    count: projects.filter((p) => p.category === "systems").length,
  },
  {
    key: "embedded",
    label: "Embedded",
    count: projects.filter((p) => p.category === "embedded").length,
  },
  {
    key: "signal",
    label: "Signal Processing",
    count: projects.filter((p) => p.category === "signal").length,
  },
  {
    key: "mobile",
    label: "Mobile",
    count: projects.filter((p) => p.category === "mobile").length,
  },
];


const WorksPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const openExternal = (url) => {
    if (!url || url === "#") return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.category === activeFilter;
  });
  

  return (
    <div className="works" style={{}}>
      <div className="title-divider">My Works & Projects</div>

      {/* Filter Navigation */}
      <div className="filter-nav" style={{}}>
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveFilter(category.key)}
            style={{
              background:
                activeFilter === category.key
                  ? "linear-gradient(135deg, #a06043, #b86d4a)"
                  : "rgba(0, 0, 0, 0.3)",

              border:
                activeFilter === category.key
                  ? "2px solid #a06043"
                  : "2px solid rgba(160, 96, 67, 0.5)",
              color: activeFilter === category.key ? "white" : "#ffccb5",

              boxShadow:
                activeFilter === category.key
                  ? "0 0 20px rgba(160, 96, 67, 0.5)"
                  : "none",
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== category.key) {
                e.target.style.borderColor = "#a06043";
                e.target.style.color = "white";
                e.target.style.boxShadow = "0 0 15px rgba(160, 96, 67, 0.3)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== category.key) {
                e.target.style.borderColor = "rgba(160, 96, 67, 0.5)";
                e.target.style.color = "#ffccb5";
                e.target.style.boxShadow = "none";
              }
            }}
          >
            {category.label}
            <span style={{}}>{category.count}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="proj-grid" style={{}}>
        {filteredProjects.map((project) => {
          const hasLiveUrl = isValidUrl(project.liveUrl);
          const hasRepoUrl = isValidUrl(project.githubUrl);

          return (
            <div className="proj-card" key={project.id}>
            {/* Featured Badge */}
            {project.featured && (
              <div
                className="card-edge"
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  backgroundColor: "#a06043",
                  color: "white",
                  padding: "5px 12px",
                  borderRadius: "15px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  zIndex: 2,
                  boxShadow: "0 0 15px rgba(160, 96, 67, 0.7)",
                }}
              >
                FEATURED
              </div>
            )}

            {/* Project Image */}
            <div className="card-img">
              <img src={project.image} alt={project.title} />
              {/* Overlay on hover */}
              <div className="card-overlay">
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "25px",
                    color: "#a06043",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "transform 0.2s ease",
                  }}
                  onClick={() => openExternal(project.liveUrl)}
                  disabled={!hasLiveUrl}
                  aria-disabled={!hasLiveUrl}
                >
                  Live Demo
                </button>
                <button
                  className="button-outline"
                  onClick={() => openExternal(project.githubUrl)}
                  disabled={!hasRepoUrl}
                  aria-disabled={!hasRepoUrl}
                >
                  GitHub
                </button>
              </div>
            </div>

            {/* Project Content */}
            <div className="card-content" style={{}}>
              <h5 className="sph-light">{project.title}</h5>

              <p className="content-desc">{project.description}</p>

              {/* Technologies */}
              {/* Technologies */}
              <div className="technologies-container">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <button
                  className="button-outline"
                  style={{
                    flex: 1,
                  }}
                  onClick={() => openExternal(project.liveUrl)}
                  disabled={!hasLiveUrl}
                  aria-disabled={!hasLiveUrl}
                >
                  View Details
                </button>
                <button
                  className="custom-btn-outline"
                  style={{
                    flex: 1,
                  }}
                  onClick={() => openExternal(project.githubUrl)}
                  disabled={!hasRepoUrl}
                  aria-disabled={!hasRepoUrl}
                >
                  Source Code
                </button>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      <div className="last-section">
        {/* Stats Section */}
        <div className="proj-stat spcard">
          <h3 className="sph" style={{ marginBottom: 20 }}>
            Project Statistics
          </h3>
          <div
            className="stats-section"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              textAlign: "center",
            }}
          >
            <div>
              <h2
                className="sph stat-number"
                style={{
                  marginBottom: "8px",
                }}
                data-target={projectStats.totalProjects}
                data-suffix=""
              >
                {projectStats.totalProjects}
              </h2>
              <p style={{}}>Total Projects</p>
            </div>
            <div>
              <h2
                className="sph stat-number"
                style={{
                  marginBottom: "8px",
                }}
                data-target={projectStats.featuredWorks}
                data-suffix=""
              >
                {projectStats.featuredWorks}
              </h2>
              <p>Featured Works</p>
            </div>
            <div>
              <h2
                className="sph stat-number"
                style={{
                  marginBottom: "8px",
                }}
                data-target={projectStats.technologiesUsed}
                data-suffix=""
              >
                {projectStats.technologiesUsed}
              </h2>
              <p>Technologies Used</p>
            </div>
            <div>
              <h2
                className="sph"
                style={{
                  marginBottom: "8px",
                }}
              >
                {projectAvailability.value}
              </h2>
              <p>{projectAvailability.label}</p>
            </div>
          </div>
        </div>

        <div style={{ flex: 0.1 }}></div>

        {/* Call to Action */}
        <div className="callaction spcard">
          <h3 className="sph">Have a Project in Mind?</h3>
          <p
            style={{
              fontSize: "18px",
            }}
          >
            I'm always excited to collaborate on new projects and bring
            innovative ideas to life. Let's discuss how we can work together to
            create something amazing.
          </p>
          <button className="btn-gradient-purple">Start a Project</button>
        </div>
      </div>

      <div className="achivments-container">
        <div className="title-divider" style={{ marginBottom: "20px" }}>
          Achivments
        </div>

        <div style={{ margin: "30px auto", maxWidth: 800 }}>
          <p>{achievementsIntro}</p>
        </div>
        <div className="achivments-grid">
          {achievements.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-year">{achievement.year}</div>
              <div className="achievement-content">
                <span className="achievement-category">
                  {achievement.category}
                </span>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .filter-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WorksPage;
