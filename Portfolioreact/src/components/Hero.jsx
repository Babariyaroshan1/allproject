import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import profileImg from "../assets/RohanDp.jpg";
import "../main.css";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero section py-2   nav-theme">
        <div className="container ">
          <div className="row align-items-center py-2 gy-4">

            <div className="col-lg-6 py-5">
              <h1>
                Hello, I'm <span className="text-primary ">Babariya Roshan</span>
              </h1>

              <p className="fs-4  hero-title ">
                I'm a <span className="hero-role text-primary "></span>
              </p>
              <p>
                An enthusiastic Full-Stack Developer who enjoys creating responsive web applications and is eager to learn new technologies to grow as a developer.
              </p>

              <p>
                <i><b>"Code, learn, evolve."</b></i>
              </p>


              <div className="mt-4">
                <Link to="/projects" className="btn btn-primary me-3">
                  View My Work
                </Link>

                <a href="/Resume" className="btn btn-outline-secondary">
                  Resume
                </a>
              </div>

              {/* SOCIAL LINKS */}
              <div className="d-flex gap-4 pt-3 fs-3 hero-social ">
                <Link className="text-primary" to={"https://github.com/Babariyaroshan1"}><BsGithub /></Link>
                <Link className="text-primary" to={"https://www.linkedin.com/in/babariya-roshan-a06169340/"}><FaLinkedin /></Link>
                <Link className="text-primary " to="/contact"><BsFillPersonLinesFill /></Link>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src={profileImg}
                alt="profile"
                className="  profile-img"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;

