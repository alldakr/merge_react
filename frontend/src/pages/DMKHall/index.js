import React, { Component } from 'react'
import { Container, Row, Button } from "reactstrap";

import CRTS from "components/argon-design/index-page/CRTS.js";
import Navbars from "components/argon-design/index-page/Navbars.js";
import Menus from "components/argon-design/index-page/Menus.js";

import Modals from "components/argon-design/index-page/Modals.js";
import DatePickers from "components/argon-design/index-page/DatePickers.js";
import TooltipsPopovers from "components/argon-design/index-page/TooltipsPopovers.js";
import FileUpload from "components/argon-design/index-page/FileUpload.js";
import Carousel from "components/argon-design/index-page/Carousel.js";
import NucleoIcons from "components/argon-design/index-page/NucleoIcons.js";

export default function DMKHallPage () {
    return (
      <div>
        <div className="section">
          <Container>
          <h2 className="mt-lg mb-5">
              <span>Javascript Components</span>
            </h2>
            {/*CRTS short for Checkboxes, Radios, Toggles and Sliders*/}
            <CRTS />
            <Menus />
            <Modals />
            <DatePickers />
            <TooltipsPopovers />
            <FileUpload />
          </Container>
        </div>
        <Navbars />
        <Carousel />
        <NucleoIcons />

      </div>
    )
  }
