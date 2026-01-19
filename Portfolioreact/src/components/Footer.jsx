import React from "react";
import { BsGithub,BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer id="footer" className="footer nav-theme d-flex text-center justify-content-center py-4" style={{ border:"light"}}>
      <div className="container  ">
        <h3 className="sitename ">Portfolio</h3>
        <p>Let's connect and make something amazing! Reach out for projects, collaborations, or just to say hi.</p>

        <div className="d-flex justify-content-center gap-4 fs-3 hero-social">
          <Link className="text-primary" to={"https://github.com/Babariyaroshan1"}><BsGithub /></Link>
          <Link className="text-primary" to={"https://www.linkedin.com/in/babariya-roshan-a06169340/"}><FaLinkedin /></Link>
          <Link className="text-primary " to="/contact"><BsFillPersonLinesFill /></Link>
        </div>
      </div>
    </footer>
  );
}
