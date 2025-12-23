import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getUrl } from "../../utils";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      // If not on home page, navigation will be handled by Link to="/" with hash
      // But standard Link with hash works better if we let it render as an anchor with full path?
      // Or we can just use href="/#id" which forces a reload/navigation.
      // Since we want to scroll to element, a reload is fine or we can use a library.
      // For simplicity, we'll use href="/#id" logic in the JSX.
      return; 
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLink = (id) => {
    if (location.pathname === "/") {
      return `#${id}`;
    }
    return `/#${id}`;
  };

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/">
        <h2>Portfolio</h2>
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen ? getUrl("nav/closeIcon.png") : getUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href={getLink("about")}>About</a>
          </li>
          <li>
            <a href={getLink("projects")}>Projects</a>
          </li>
          <li>
            <a href={getLink("research")}>Research</a>
          </li>
          <li>
            <a href={getLink("experience")}>Experience</a>
          </li>
          <li>
            <a href={getLink("contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
