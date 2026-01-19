import React from "react";
import { IoIosDownload } from "react-icons/io";
import "../main.css";
import { Link } from "react-router";

export default function Resume() {
  return (
    <main className="resume-page nav-theme">

      {/* PAGE TITLE */}
      <section className="page-title pt-5  ">
        <div className="container w-50 text-center">
          <h1 className="text-primary">Resume</h1>

          <p className="muted-text">
           Detail-oriented and proactive professional with [2021-2024] years of experience in [AIML]. Proven track record of delivering exceptional results through strong problem-solving, teamwork, and project management skills.
          </p>

          <a  href="/assets/Roshan_babariya_Resume.pdf"  download  className="btn btn-primary  my-5">
            <IoIosDownload size={22} className="me-2" />
            Download Resume
          </a>
        </div>
      </section>

      {/* RESUME SECTION */}
      <section className="resume section py-5">
        <div className="container">
          <div className="row g-4">

            {/* LEFT COLUMN */}
            <div className="col-lg-6">

              <h3 className="resume-title text-primary">About</h3>
              <div className="resume-item pb-3">
                <h4>Babariya Roshan</h4>
                <p>
                  <em>
                    Enthusiastic and detail-oriented Full-Stack Developer with
                    hands-on experience in building responsive websites and web
                    applications. Skilled in frontend technologies like React.js
                    and backend tools like Node.js. Currently seeking an
                    entry-level role to contribute technical skills and grow
                    within a collaborative development team.
                  </em>
                </p>

                <ul className="detail">
                  <li>Bodakdev, Ahmedabad</li>
                  <li>+91 8799484056</li>
                  <li>babariyaroshan123@gmail.com</li>
                </ul>
              </div>


              <h3 className="resume-title text-primary">Projects</h3>
              <div className="resume-item pb-3">
                <h4>Shoes Website Using React and Node.js :</h4>
                <p>
                  Developed a full-stack shoes eCommerce website using React.js for the frontend and Node.js
                  for the backend. Implemented dynamic product listings, smooth navigation, and a responsive
                  UI, focusing on performance and a user-friendly shopping experience across all devices.
                </p>

                <h5>Portfolio In React :</h5>
                <p> Built a modern and responsive portfolio website using React.js and reusable components.
                  Focused on clean UI, component-based architecture, and mobile-first design to ensure
                  performance and scalability.</p>

                <h5>Cloning Websites :</h5>
                <p>I have worked on creating clone websites of Netflix ,Patang Hotel,Sabarmati Riverfront, and converting many PSD files to HTML. <p> I have used tools and technologies such as ChatGPT and Google</p></p>

                <h5>Netflix Clone – React :</h5>
                <p>Developed a fully responsive Netflix homepage clone using React.js, replicating the look and feel of the original platform.Focused on creating a clean UI with smooth user interactions and optimized layout for all screen sizes. </p>

                <h5>Education Website (PSD to Html) </h5>
                <p>  Designed and developed a responsive education website using HTML5 and CSS3, featuring a clean and intuitive user interface. Implemented modern CSS techniques like Flexbox and Grid for layout, enhancing user experience and accessibility.</p>

                <h5>Website Clones :</h5>
                <p>  Netflix, Patang Hotel, Sabarmati Riverfront & multiple PSD  conversions.</p>

                <h5>Using Figma :</h5>
                <p>  website Hero-section Construction website landing page Fruits & Vegetables</p>
              </div>




            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6">
              <h3 className="resume-title text-primary">Skills</h3>
              <div className="resume-item">
                <h4 >Technical Skills</h4>
                <h6 className="detail">UI/UX & Web Development</h6>

                <ul className="detail">
                  <li>Frontend: HTML, CSS, JavaScript, Bootstrap, jQuery, <strong>React.js (with Vite)</strong></li>
                  <li>Backend: Node.js (Express.js)</li>
                  <li>Javascript (Basic, loops, functions, conditional statements ) , jQuery</li>
                  <li>Basic understanding of Github.</li>
                  <li>Ui/Ux : Figma ,Adobe Photoshop</li>
                </ul>
              </div>

              <h3 className="resume-title text-primary">Professional Experience</h3>
              <div className="resume-item">
                <h4 className="mb-0">troopystack</h4>
                <span >Ahmedabad-March 2025 - Aug 2025</span>
                <p className="pt-2">
                  Completed a 6-month Full-Stack Development program at Troopystack, including 3 months of
                  hands-on training and a 3-month internship.Gained practical experience in building responsive web
                  applications using React, Node.js, Express, and MongoDB
                </p>
              </div>

              <h3 className="resume-title text-primary">Certifications</h3>
              <div className="resume-item">
                <h4>Full-Stack Developer Course</h4>
                <p>
                  Currently pursuing Full-Stack Development at Frameboxx,
                  covering UI/UX design, responsive web development, and modern
                  web technologies.
                </p>

                <h5>Diploma Provisional Certificate</h5>
                <p>  Diploma in AIML – April 2024</p>
                <p>Full-Stack Development Course Certificate</p>
              </div>

              <h3 className="resume-title text-primary">Education</h3>
              <div className="resume-item pb-3">
                <h4 className="mb-0" >Diploma in AIML (ArtificialIntelligence And Machine Learning) <br /> <span>2021 – 2024</span></h4>
                <p></p>
                <p className="mb-0">LJ Polytechnic, Ahmedabad</p>
                <ul className="detail">
                  <li>Graduated with Higher Second Class Distinction</li>
                  <li>Full-Stack Developer Course Troopy Stack – Learning MERN Stack and modern development tools</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

