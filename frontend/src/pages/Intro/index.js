import React, { Component } from 'react'
import { Container, Row, Button } from "reactstrap";
import NavigationPills from "components/argon-design/index-page/NavigationPills.js";
import ProgressBars from "components/argon-design/index-page/ProgressBars.js";
import Paginations from "components/argon-design/index-page/Paginations.js";
import Badges from "components/argon-design/index-page/Badges.js";
import Alerts from "components/argon-design/index-page/Alerts.js";
import Toasts from "components/argon-design/index-page/Toasts.js";

export default function IntroPage () {
    return (
      <div>
        <div className="section section-components">
          <Container>
            <NavigationPills />
            <Row>
              <ProgressBars />
              <Paginations />
            </Row>
            <Badges />
            <Alerts />
            <Toasts />
          </Container>
        </div>
      </div>
    )
  }
