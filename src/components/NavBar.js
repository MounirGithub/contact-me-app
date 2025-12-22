import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import styles from "./NavBar.module.css";
import Button from "./ui/Button";

export const NavBar = ({ firstItemRef }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? styles.scrolled : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={styles.collapseRight}>
          <Nav className={styles.navList}>
            <Nav.Link
              href="#home"
              className={`${styles.link} ${
                activeLink === "home" ? styles.active : ""
              }`}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`${styles.link} ${
                activeLink === "projects" ? styles.active : ""
              }`}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`${styles.link} ${
                activeLink === "skills" ? styles.active : ""
              }`}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
          </Nav>
          <span className={styles.navbarText}>
            <div className={styles.socialIcon}>
              <a href="https://www.linkedin.com/in/benmounir/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/MounirGithub">
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <Button
              variant="secondary"
              onClick={() => firstItemRef.current.scrollIntoView()}
            >
              Contact Me
            </Button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
