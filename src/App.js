import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  const headerData = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  const homeData = {
    title: "Keep Moving Forward",
    subTitle: "Projects, and add sub title",
    text: "Take a look at my projects below",
  };

  const [title, setTitle] = useState("Kirk Veitch");
  const [headerLinks, setHeaderLinks] = useState(headerData);
  const [home, setHome] = useState(homeData);
  const [about, setabout] = useState({ title: "About Me" });
  const [contact, setContact] = useState({ title: "Get in touch" });

  return (
    <Router>
      <Container fluid={true} className="p-0">
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Kirk Veitch</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link mr-auto" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Container className='justify-content-start ml-auto p-0 m-0'>
                <Link className="nav-link" to="www.linkedin.com">LinkedIn.ico</Link>
                <Link className="nav-link" to="www.linkedin.com">GitHub.ico</Link>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
