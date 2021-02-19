import React, { Component } from 'react'
import { Container, Row, Button } from "reactstrap";

import Inputs from "components/argon-design/index-page/Inputs.js";
import Dropdowns from "components/argon-design/index-page/Dropdowns.js";
import Selects from "components/argon-design/index-page/Selects.js";
import Spinners from "components/argon-design/index-page/Spinners.js";
import Textarea from "components/argon-design/index-page/Textarea.js";
import Tags from "components/argon-design/index-page/Tags.js";

export default function CommunityPage () {
    return (
      <div className="wrapper">
        <Inputs />
        <div className="section section-select">
          <Container>
            <Row>
              <Selects />
              <Dropdowns />
            </Row>
            <Row>
              <Textarea />
              <Tags />
            </Row>
            <Spinners />
          </Container>
        </div>

      </div>
    )
  }