import React, { useState } from "react";
import { Link } from "react-router";
import "../main.css";
import Img6 from "../assets/PortfolioBootstrap.png"
import Img1 from "../assets/netflixdp.jpeg";
import Img2 from "../assets/riverfront-foot-over-bridge-1.jpg";
import Img3 from "../assets/images.jpeg";
import Img4 from "../assets/Jewellery.PNG";
import Img5 from "../assets/mainsec3img.png";
import Img7 from "../assets/FoodiezHub.png";
import Img8 from "../assets/FullstackWebsite.png";

/*  PROJECTS DATA */
const projectsData = [
  {
    img: Img8,
    title: "BORCELLE Ecommerce Website",
    desc: "Ecommerce website using React and Node js  built with modern UI and Authentication.",
    link: "https://69578ff81d1643fe319703fb--genuine-cactus-d52f97.netlify.app",
    tag: "Full-Stack Website",
    category: "Full-Stack",
  },
  {
    img: Img1,
    title: "Movie TV App - Using React",
    desc: "Netflix-style movie browsing app built using React.js",
    link: "https://movietvusingreact.netlify.app/",
    tag: "React",
    category: "React",
  },
  {
    img: Img7,
    title: "FoodiezHub",
    desc: "FoodiezHub browsing app built using React.js ,focused on clean UI and responsiveness. ",
    link: "https://6957762c7109ebc0b5cf6ccf--leafy-boba-86b194.netlify.app/",
    tag: "React",
    category: "React",
  },
  {
    img: Img4,
    title: "Prestige Jewellery",
    desc: "Elegant jewellery website focused on clean UI and responsiveness.",
    link: "https://roshanbabariyaportfolioo.netlify.app/",
    tag: "Website",
    category: "Website",
  },
  {
    img: Img3,
    title: "Patang Hotel",
    desc: "Responsive hotel website clone built with modern UI and clean layout.",
    link: "https://hotelpatang.netlify.app/",
    tag: "Website",
    category: "Website",
  },
  {
    img: Img1,
    title: "Netflix Website",
    desc: "Netflix website built using HTML, CSS and JavaScript.",
    link: "https://netmirrorpageusinghml.netlify.app/",
    tag: "Website",
    category: "Website",
  },
  {
    img: Img6,
    title: "Portfolio using Html css js and bootstrap",
    desc: "Responsive Portfolio website clone built with modern UI and clean layout.",
    link: "https://hotelpatang.netlify.app/",
    tag: "Website",
    category: "Website",
  },

  {
    img: Img5,
    title: "Burger PSD",
    desc: "Pixel-perfect PSD to HTML conversion using Bootstrap.",
    link: "https://burgerwebsitesuggestion.netlify.app/",
    tag: "PSD",
    category: "PSD",
  },
  {
    img: Img2,
    title: "Sabarmati Riverfront Website",
    desc: "Responsive Sabarmati Riverfront website clone.",
    link: "https://sabarmatiriverfront.netlify.app/",
    tag: "Website",
    category: "Website",
  },
];

/*    MAIN COMPONENT */
function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter(
        (project) => project.category === activeFilter
      );

  return (
    <main className="resume-page nav-theme">
      {/* PAGE TITLE */}
      <section className="page-title py-5 text-center">
        <div className="container">
          <h1 className="fw-bold text-primary">Projects</h1>
          <p className="muted-text mt-2">
            Creative and results-driven professional showcasing real-world
            projects built using modern web technologies.
          </p>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio py-5">
        <div className="container">

          {/* FILTER BUTTONS */}
          <div className="d-flex justify-content-center mb-4">
            <ul className="portfolio-filters list-unstyled d-flex gap-3">
              {["All","Full-Stack", "Website", "React", "PSD"].map((filter) => (
                <li
                  key={filter}
                  className={`btn btn-sm ${activeFilter === filter
                      ? "btn-primary"
                      : "btn-outline-secondary"
                    }`}
                  onClick={() => setActiveFilter(filter)}
                  style={{ cursor: "pointer" }}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>

          {/* PROJECT CARDS */}
          <div className="row g-4">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Projects;

/*  REUSABLE PROJECT CARD   */
function ProjectCard({ img, title, desc, link, tag }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100 shadow-sm portfolio-card">
        <img src={img} className="card-img-top" alt={title} />

        <div className="card-body d-flex flex-column">
          <span className="badge bg-primary align-self-start mb-2">
            {tag}
          </span>

          <h5 className="fw-bold">{title}</h5>
          <p className="muted-text flex-grow-1">{desc}</p>

          <Link
            to={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary mt-auto"
          >
            View Project{" "}
            <i className="bi bi-box-arrow-up-right ms-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
