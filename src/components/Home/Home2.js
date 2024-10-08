import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/profile-img.png";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about technology and programming. I enjoy exploring new advancements in the tech world and applying my skills to develop innovative solutions.
              <br />
              <br />I have a strong interest in Web Programming, Mobile Development, and Artificial Intelligence.
              <br/>
              <br />My main programming language are:
              <i>
                <b className="purple"> PHP </b>
                and
                <b className="purple"> Python </b>
              </i>
              <br/>
              <br/>
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> especially in
                <b className="purple"> Backend Technologies</b> and
                also in areas related to{" "}
                <b className="purple">
                  Artificial Intelligence.
                </b>
              </i>
              <br />
              <br />
              Usually I use <b className="purple">Laravel</b>  for building web applications and
              Whenever possible, I also apply my passion for developing mobile app
              with <b className="purple">Kotlin</b> 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/neddy1298"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/neddy-avgha-prasetio/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
