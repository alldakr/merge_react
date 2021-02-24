import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import imgA from "assets/argon-design/img/theme/masha-rostovskaya.jpg";
import imgB from "assets/argon-design/img/theme/ali-pazani.jpg";
import imgC from "assets/argon-design/img/theme/willy-dade.jpg";

function LectureApply() {
  return (
    <>
      <section className="team-1">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h1>
                <Badge pill color="primary">
                  Primary
                </Badge>{" "}
              </h1>
              <h3 className="display-3">Our Awesome Team 1</h3>
              <p className="lead">
                People in this world shun people for being great. For being a
                bright color. For standing out. But the time is now to be okay
                to be the greatest you. Would you believe in what you believe
                in?
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="projects-3">
        <Container>
          <Row>
            <Col lg="3">
              <Card
                className="card-background"
                style={{
                  backgroundImage: "url(" + imgA + ")",
                }}
              >
                <CardBody className="text-left">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle mb-3">
                    <i className="ni ni-atom text-warning"></i>
                  </div>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardTitle tag="h3">Project Alpha</CardTitle>
                  </a>
                  <h6 className="desc text-white opacity-8">Java App</h6>
                  <Button
                    color="warning"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Watch Later
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-background"
                style={{
                  backgroundImage: "url(" + imgB + ")",
                }}
              >
                <CardBody className="text-center">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle mb-3">
                    <i className="ni ni-controller text-danger"></i>
                  </div>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardTitle tag="h3">Project Beta</CardTitle>
                  </a>
                  <h6 className="desc text-white opacity-8">College</h6>
                  <Button
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Watch Later
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-background"
                style={{
                  backgroundImage: "url(" + imgC + ")",
                }}
              >
                <CardBody className="text-right">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle mb-3">
                    <i className="ni ni-html5 text-success"></i>
                  </div>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardTitle tag="h3">Project Gama</CardTitle>
                  </a>
                  <h6 className="desc text-white opacity-8">HTML code</h6>
                  <Button
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Watch Later
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-background"
                style={{
                  backgroundImage: "url(" + imgA + ")",
                }}
              >
                <CardBody className="text-right">
                  <div className="icon icon-shape bg-gradient-white shadow rounded-circle mb-3">
                    <i className="ni ni-html5 text-success"></i>
                  </div>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardTitle tag="h3">Project Gama</CardTitle>
                  </a>
                  <h6 className="desc text-white opacity-8">HTML code</h6>
                  <Button
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Watch Later
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LectureApply;
