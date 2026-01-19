import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FollowCursor from "./FollowCursor";

function Layout() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <FollowCursor />
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
