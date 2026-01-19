import React, { Component, useEffect, useState } from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import "../css/home.css";
import profileImg from "../assets/mbg.png";
import SkillsCylinder from "../components/SkillsCylinder";
import TypewriterEffect from "../components/TypewriterEffect";
import WorksPage from "./WorksPage";
import AboutPage from "./AboutPage";
import FooterHomePage from "./FooterHomePage";

import "../js/home.js"
import ContactMe from "./ContactPage.jsx";

const styles = {
  main: {
    background: "",
  },
  navlink: {},
};

const hero = {
  nameLines: ["SALIM", "ALSULAIMI"],
  fullName: "SALIM ALSULAIMI",
  titlePrefix: "Electrical & Computer Engineering student |",
  titleHighlights: ["Embedded Systems & Networking"],
  details: [
    "Building real-world systems that connect hardware, software, and networks.",
    "Muscat, Oman",
    "Sultan Qaboos University - Expected 2026",
  ],
};

const skills = hero.titleHighlights;

const placeholderSections = [
  {
    id: "link4",
    title: "Blogs",
    description: "Coming soon.",
  },
  {
    id: "link5",
    title: "Service",
    description: "Coming soon.",
  },
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
  },
  {
    title: "Software Development Lead",
    company: "Mandoob Company",
    period: "2024 - 2025",
    description:
      "Led core software features for a delivery platform with mobile-first workflows.",
  },
  {
    title: "Dual-Axis Solar Tracking System",
    company: "Course Project",
    period: "2025",
    description:
      "ATmega32-based dual-axis tracking prototype with sensor and servo control.",
  },
];

export default function () {
  const [skill, setSkill] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSkill((prev) => (skills.length - 1 == prev ? 0 : prev + 1));
    }, 2000); // change skill every 2s
    return () => clearInterval(interval);
  }, []);

   useEffect(() => {
    const cards = document.querySelectorAll(".spcard, .spcard-light, .timeline-content");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showing-inscroll");
          observer.unobserve(entry.target); // run once
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []);

useEffect(() => {
  // document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".stats-section");
  console.log(sections);

  const animateCounter = (el, target, suffix, duration) => {
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const value = Math.min(
        Math.floor((progress / duration) * target),
        target
      );
      el.textContent = value + (suffix || "");

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll(".stat-number");
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const suffix = counter.getAttribute("data-suffix");
            const duration = +counter.getAttribute("data-duration") || 2000; // default 2s
            animateCounter(counter, target, suffix,  duration);
          });

          observer.unobserve(entry.target); // Run once per section
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% visible
  );

  sections.forEach((section) => observer.observe(section));
// });
 }, []);


  return (
    <div className="main ">
      
      <Navbar expand="lg" className="px-3 navbar " data-bs-theme="dark" >
        <Container>
          {/* Brand with image and name */}
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center nav-title"
          >
            {/* <img
              src={profileImg} // replace with your image URL
              alt="Yunos"
              width="40"
              height="40"
              className="d-inline-block align-top me-2" 
            /> */}
            {hero.fullName}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {" "}
              {/* Push links to the right */}
              <Nav.Link href="#home" className="mx-2 nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="mx-2 nav-link">
                About
              </Nav.Link>
              <Nav.Link href="#works" className="mx-2 nav-link">
                Works
              </Nav.Link>
              <Nav.Link href="#link4" className="mx-2 nav-link">
                Blogs
              </Nav.Link>
              <Nav.Link href="#link5" className="mx-2 nav-link">
                Service
              </Nav.Link>
              <Nav.Link href="#link6" className="mx-2 nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="overflow-auto h-100 body" id="#home">
        <div  id="home"></div>
        <div className="leading-container ">
          <div className="profile-container">
  

            <img
              src={profileImg}
              alt={hero.fullName}
              className="profile-img"
            /> 
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 800 800"
            >
              <rect fill="#000000" width="800" height="800" />
              <g fill-opacity="1">
                <circle fill="#000000" cx="400" cy="400" r="600" />
                <circle fill="#001b25" cx="400" cy="400" r="500" />
                <circle fill="#022a35" cx="400" cy="400" r="400" />
                <circle fill="#163a46" cx="400" cy="400" r="300" />
                <circle fill="#294b58" cx="400" cy="400" r="200" />
                <circle fill="#3B5D6A" cx="400" cy="400" r="100" />
              </g>
            </svg> */}
          </div>
          <div className=" flex-column" style={{ display: "flex", flex: 1 }}>
            <div className="leading-info ">
              {hero.nameLines.map((line, index) => (
                <h1 className="big-name" key={`${line}-${index}`}>
                  {line}
                </h1>
              ))}
              <h3 className="skills-text">
                {hero.titlePrefix}{" "}
                <TypewriterEffect texts={skills} />
              </h3>
              <div></div>

              <p>
                {hero.details.map((line, index) => (
                  <span key={`${line}-${index}`}>
                    {line}
                    {index < hero.details.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            <div className="leading-links" id="about">
              <a>
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a>
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a>
                <i class="fa-brands fa-discord"></i>
              </a>
              <a>
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <h2></h2>
        {/* <div className="leading-stat">
          <div className="stat-item">
            <p>
              {" "}
              visitor<span>500+</span>
            </p>
          </div>
          <div className="stat-item">
            <p>
              {" "}
              Linkedin folowers<span>10k+</span>
            </p>
          </div>
          <div className="stat-item">
            <p>
              {" "}
              Projects<span>11+</span>
            </p>
          </div>
          <div className="stat-item">
            <p>
              {" "}
              Year of experince<span>20+</span>
            </p>
          </div>
        </div> */}
        <AboutPage/>

        <WorksPage/>

        {placeholderSections.map((section) => (
          <div key={section.id} id={section.id} className="aboutme-container">
            <div className="title-divider">{section.title}</div>
            <div className="spcard">
              <p>{section.description}</p>
            </div>
          </div>
        ))}

        <div id="link6">
          <ContactMe/>
        </div>

        <FooterHomePage/>


        
      </div>
    </div>
  );
}
