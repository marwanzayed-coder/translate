import { Container, Nav, Navbar } from "react-bootstrap";
import { RiTranslate } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Styles from "@/styles/Home.module.css";
import Link from "next/link";

const Header = () => {
  let style = {
    background: "#fff",
    padding: "6px 10px",
    boxShadow: "0 0 10px #ccc",
    borderRadius: "8px",
    color: "#000",
    textDecoration: "none",
    display: "block",
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link href="/" className="navbar-brand">
            <RiTranslate />
            Translate
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav mb-5" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${Styles.navbarNav} me-auto`}>
            <a
              href="https://github.com/marwanzayed-coder/translate"
              style={{
                ...style,
              }}
            >
              <FaGithub /> Star On Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
