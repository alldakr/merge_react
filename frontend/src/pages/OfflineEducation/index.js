import React, { Component } from 'react'
import { Container, Row, Button } from "reactstrap";
import PreFooters from "components/argon-design/index-page/PreFooters.js";
import Footers from "components/argon-design/index-page/Footers.js";
import Typography from "components/argon-design/index-page/Typography.js";
import Images from "components/argon-design/index-page/Images.js";

export default function OfflineEduPage () {
    return (
      <div>
        <PreFooters />
        <Footers />
        <div className="section section-typography">
        <Container>
          <Typography />
          <Images />
        </Container>
      </div>

      </div>

    )
  }
