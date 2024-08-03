import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import managementKendaraan from "../../Assets/Projects/managementKendaraan.png";
import rutbis from "../../Assets/Projects/rutbis.png";
import codecrafter from "../../Assets/Projects/codecrafter.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import streamlt from "../../Assets/Projects/streamlt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={managementKendaraan}
              isBlog={false}
              title="Management Kendaraan"
              description="Web app that is designed to help users manage their vehicle, such as adding, updating, and deleting vehicles. Built with Laravel and MySQL."
              ghLink="https://github.com/neddy1298/management-Kendaraan"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rutbis}
              isBlog={false}
              title="RutBis"
              description="Mobile app that is designed to help users find the best route to their destination by providing the shortest route, the fastest route, and the route with the least traffic. Built with Kotlin."
              ghLink="https://github.com/neddy1298/rutbis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal Personal Website showcasing my skills, and projects. Built with Javascripts with React library."
              ghLink="https://github.com/neddy1298/react-portfolio"
              demoLink="https://www.neddyap.live"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codecrafter}
              isBlog={false}
              title="Code Crafter"
              description="Simple Landing Page for a fictional web development company, showcasing services, portfolio, and contact information. Built with HTML, CSS, and Bootstrap."
              ghLink="https://github.com/neddy1298/companyprofile"
              demoLink="https://project1.neddyap.live"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streamlt}
              isBlog={false}
              title="Streamlt"
              description="Mobile app designed to stream movies and tv shows, discover new movies and tv shows, and manage your watchlist. Built with Flutter and Firebase."
              ghLink="https://github.com/neddy1298/streamlt"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
