import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiPython,
    DiGit,
    DiJava,
    DiLaravel,
} from "react-icons/di";
import {
    SiFirebase,
    SiPostgresql,
    SiPhp,
    SiMysql,
    SiKotlin,
    SiSpringboot,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiLaravel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiKotlin />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot />
        </Col>
    </Row>
  );
}

export default Techstack;
