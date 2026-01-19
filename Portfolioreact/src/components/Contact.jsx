import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BsGithub, BsFillPersonLinesFill, BsTelephone, BsEnvelope, BsGeoAlt } from "react-icons/bs";
import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa6";
import "../main.css";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  /* ======================= CONTACT INFO DATA ======================= */
  const contactInfoData = [
    { icon: <BsGeoAlt />, title: "Address", value: "Bodakdev, Ahmedabad", },
    { icon: <BsTelephone />, title: "Call", value: "+91 8799484056", link: "tel:+918799484056", },
    {
      icon: <BsEnvelope />, title: "Email", value: "babariyaroshan123@gmail.com", link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzDCwfshVMMsQNklGTSgxDCrFntFGhjpGKjHmxXpkJQwLjBgvlRmWhzqRKpmRKLVNzPcbSB",
    },];
  /* ======================= SOCIAL DATA ======================= */
  const socialLinks = [
    { icon: <BsGithub />, link: "https://github.com/Babariyaroshan1", },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/babariya-roshan-a06169340/", },
    { icon: <BsFillPersonLinesFill />, link: "", },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7bmcub5",     // YOUR SERVICE ID
        "template_qejf58j",     // YOUR TEMPLATE ID
        formRef.current,
        "sY0KXxDVb2lH7gX92"      // YOUR PUBLIC KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully ");
          formRef.current.reset();
        },
        (error) => {
          setStatus("Something went wrong ");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <main className="nav-theme">
        {/* PAGE TITLE */}
        <section className="page-title py-5 text-center">
          <div className="container">
            <h1 className="fw-bold text-primary">Contact</h1>
            <p className="muted-text mt-2"> Feel free to get in touch! Whether you have a project in mind, collaboration opportunity, or just want to say hello. </p>
          </div>
        </section>
      </main>
      
      {/* CONTACT SECTION */}
      <section id="contact" className="contact py-5 nav-theme">
        <div className="container">
           {/* INFO CARDS */}
          <div className="row g-4 mb-5">
            {contactInfoData.map((item, index) => (<ContactInfo key={index} {...item} />
            ))}
            {/* SOCIAL PROFILES CARD */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm p-4">
                <div className="d-flex align-items-center gap-3">
                  <span className="fs-3 text-white icon">
                    <BsFillPersonLinesFill />
                  </span>
                  <div>
                    <h5 className="mb-2">Social Profiles</h5>
                    <div className="d-flex gap-3 fs-4">
                      {socialLinks.map((item, index) => (<Link key={index} to={item.link} target="_blank" rel="noreferrer" className="text-primary"> {item.icon} </Link>))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>


        <div className="container">
          <form ref={formRef} onSubmit={sendEmail} className="row g-3 pt-5">
            <div className="col-md-6 ">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="col-12">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>

            <div className="col-12">
              <textarea
                name="message"
                rows="5"
                className="form-control"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="col-12 text-center pt-4" >
              <button type="submit" className="btn btn-primary px-4 ">
                Send Message
              </button>
            </div>

            {status && (
              <p className="text-center mt-3 fw-bold text-success">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
/* ======================= REUSABLE INFO CARD ======================= */
function ContactInfo({ icon, title, value, link }) {
  return (
    <div className="col-md-6">
      <div className="card h-100 shadow-sm p-4">
        <div className="d-flex align-items-center gap-3">
          <span className="fs-3 text-white icon">{icon}</span>

          <div>
            <h5 className="mb-1">{title}</h5>
            {link ? (
              <Link
                to={link}
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                {value}
              </Link>
            ) : (
              <p className="mb-0">{value}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
