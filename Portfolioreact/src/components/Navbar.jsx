import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSunny, IoSunnyOutline } from "react-icons/io5";
import "../main.css";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.classList.remove("dark", "light"); // Fixed
    document.body.classList.add(theme); // 'dark' or 'light' as per your CSS
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header className="sticky-top shadow-sm nav-theme py-2 shadow-lg">
        <nav className="navbar navbar-expand-lg  d-flex justify-content-between align-items-center">
          <div className="container">
            <NavLink className="navbar-brand text-primary fw-bold nav-link" to="/Contact">
              Portfolio
            </NavLink>

            <div id="navbarNav" className="navmenu">
              <ul className="navbar-nav  gap-3">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link ">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Resume" className="nav-link">
                    Resume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Projects" className="nav-link">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>

                <button
                  onClick={toggleTheme}
                  className="btn   d-flex justify-content-center align-items-center "
                  style={{ width: "45px", height: "45px" }}
                >
                  {theme === "dark" ? <IoSunnyOutline size={22} style={{ color: "white" }} /> : <IoSunny size={22} />}
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

