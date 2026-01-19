import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../main.css";
import Photo from "../assets/RohanDp.jpg"
function About() {

  /* SKILLS DATA */
  const skills = [
    ["React.js", 80],
    ["Node.js", 70],
    ["HTML", 90],
    ["CSS", 90],
    ["JavaScript", 80],
    ["Figma", 90],
    ["Photoshop", 85],
  ];

  /*  STATES  */
  const [progress, setProgress] = useState(
    skills.map(() => 0)
  );

  const skillsRef = useRef(null);
  const animated = useRef(false);

  /*  SCROLL ANIMATION  */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;

          skills.forEach((_, index) => {
            let start = 0;
            const end = skills[index][1];

            const interval = setInterval(() => {
              start++;
              setProgress((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });

              if (start >= end) clearInterval(interval);
            }, 5);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, [skills]);

  return (
    <>
      <main className="main about-page nav-theme">
        <section className="page-title pt-5 ">
          <div className="container text-center">
            <h1 className="text-primary">About</h1>
            <p className="muted-text">
              Hi there! My name is Roshan Babariya, and I am a UI/UX & Web Developer.
              I specialize in building websites as per user requirements.
            </p>
          </div>
        </section>

        {/* BREADCRUMB */}
        <nav className="breadcrumbs mt-3">
          <div className="container">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <NavLink to="/" className="nav-link text-primary">
                  Home
                </NavLink>
              </li>
              <li className="breadcrumb-item active ">About</li>
            </ol>
          </div>
        </nav>

        {/* ABOUT SECTION */}
        <section id="about" className="about section py-5">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-4 text-center">
                <img
                  src={Photo}
                  className="img-fluid rounded shadow"
                  alt="About"
                />
              </div>
              <div className="col-lg-8">
                <div className="card p-4 shadow-sm">
                  <h2 className="mb-3 text-primary">Full-Stack Developer</h2>

                  <p className="fst-italic muted-text">
                    Enthusiastic and detail-oriented Full-Stack Developer with hands-on experience in building
                    responsive websitesand web applications. Skilled in frontend technologies like React.js and
                    backend tools like Node.js using Express.js.Currently seeking an entry-level role to contribute technical skills and
                    grow within a collaborative development team.</p>

                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <strong>Work:</strong> Full-Stack Developer
                        </li>
                        <li className="list-group-item">
                          <strong>Email:</strong> <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=XBcJlDMBjVZcLjcjZxGfDzJhlhmZZhVZFQgqBSCsnZqQPzhDCWjRJXFpgZrqqMPlrSqHVvnrhswtxqPv"> <span className="text-info text-decoration-underline"> babariyaroshan123@gmail.com</span></Link>
                        </li>
                        <li className="list-group-item">
                          <strong>Github:</strong> <Link to="https://github.com/Babariyaroshan1"> Profile</Link>
                        </li>
                        <li className="list-group-item">
                          <strong>Linkedin:</strong> <Link to="https://www.linkedin.com/in/babariya-roshan-a06169340/"> Profile</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <strong>Education:</strong> Diploma In AIML [Artificial Intelligence And Machine Learning]
                        </li>
                        <li className="list-group-item">
                          <strong>Phone:</strong> +91 8799484056
                        </li>
                        <li className="list-group-item">
                          <strong>City:</strong> Ahmedabad
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-3 muted-text">
                    I focus on responsive design, modern UI, and scalable web apps.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/*  SKILLS SECTION  */}
        <section
          id="skills"
          className="skills section py-5"
          ref={skillsRef}
        >
          <div className="container">

            <div className="mb-5">
              <span className="text-uppercase fw-semibold text-primary">
                Skills
              </span>
              <h2 className="fw-bold mt-2">My Skills</h2>
            </div>

            <div className="row">
              {skills.map(([skill, value], index) => (
                <div className="col-md-6 mb-4" key={skill}>

                  <div className="skill-progress">

                    <div className="skill">
                      <span>{skill}</span>
                      <span className="val">{progress[index]}%</span>
                    </div>

                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar bgbar"
                        style={{ width: `${progress[index]}%` }}
                      />
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>


      </main>
    </>
  );
}

export default About;
