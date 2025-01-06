import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LeetCodeIcon from "@material-ui/icons/Code"; // Assuming you have a LeetCode icon
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="navbar">
        <Container>
          <Navbar.Brand href="#">Sanika Kulakrni</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="mailto:kulksanika14@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
              </Nav.Link>
              <Nav.Link href="https://github.com/sanika-14" target="_blank">
                <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/sanika-kulkarni-a25605257/" target="_blank">
                <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
              </Nav.Link>
              <Nav.Link href="https://leetcode.com/san145" target="_blank">
                <LeetCodeIcon style={{ fontSize: 21 }}></LeetCodeIcon>
              </Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1Ex_TBQ2GobAj_3NfoAhlCSjD5S2ijvxg/view" target="_blank">
                Download Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
