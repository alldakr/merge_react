import React from "react";

// reactstrap components
import { Container, Row, Button } from "reactstrap";

// Core Components
import DemoNavbar from "components/argon-design/navbars/DemoNavbar.js";
import DemoFooter from "components/argon-design/footers/DemoFooter.js";
import HeaderIndex from "components/argon-design/headers/HeaderIndex.js";
// Demo Sections for this page
import Buttons from "components/argon-design/index-page/Buttons.js";
import Inputs from "components/argon-design/index-page/Inputs.js";
import Selects from "components/argon-design/index-page/Selects.js";
import Dropdowns from "components/argon-design/index-page/Dropdowns.js";
import Textarea from "components/argon-design/index-page/Textarea.js";
import Tags from "components/argon-design/index-page/Tags.js";
import Spinners from "components/argon-design/index-page/Spinners.js";
import CRTS from "components/argon-design/index-page/CRTS.js";
import Menus from "components/argon-design/index-page/Menus.js";
import Navbars from "components/argon-design/index-page/Navbars.js";
import NavigationPills from "components/argon-design/index-page/NavigationPills.js";
import ProgressBars from "components/argon-design/index-page/ProgressBars.js";
import Paginations from "components/argon-design/index-page/Paginations.js";
import Badges from "components/argon-design/index-page/Badges.js";
import Alerts from "components/argon-design/index-page/Alerts.js";
import Toasts from "components/argon-design/index-page/Toasts.js";
import PreFooters from "components/argon-design/index-page/PreFooters.js";
import Footers from "components/argon-design/index-page/Footers.js";
import Typography from "components/argon-design/index-page/Typography.js";
import Images from "components/argon-design/index-page/Images.js";
import Tables from "components/argon-design/index-page/Tables.js";
import Comments from "components/argon-design/index-page/Comments.js";
import Chat from "components/argon-design/index-page/Chat.js";
import Cards from "components/argon-design/index-page/Cards.js";
import Modals from "components/argon-design/index-page/Modals.js";
import DatePickers from "components/argon-design/index-page/DatePickers.js";
import TooltipsPopovers from "components/argon-design/index-page/TooltipsPopovers.js";
import FileUpload from "components/argon-design/index-page/FileUpload.js";
import Carousel from "components/argon-design/index-page/Carousel.js";
import NucleoIcons from "components/argon-design/index-page/NucleoIcons.js";

function Sample() {
  return (
    <>
      <div className="wrapper">
        <Button
          className="btn-icon-only back-to-top show"
          color="primary"
          name="button"
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
          }}
        >
          <i className="ni ni-bold-up"></i>
        </Button>
        <HeaderIndex />
        <Buttons />
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
        <div className="section">
          <Container>
            {/*CRTS short for Checkboxes, Radios, Toggles and Sliders*/}
            <CRTS />
            <Menus />
          </Container>
        </div>
        <Navbars />
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
        <PreFooters />
        <Footers />
        <div className="section section-typography">
          <Container>
            <Typography />
            <Images />
          </Container>
        </div>
        <div className="section section-content-areas">
          <Container>
            <h2 className="mt-lg mb-5">
              <span>Content Areas</span>
            </h2>
            <Tables />
            <Comments />
            <Chat />
          </Container>
        </div>
        <Cards />
        <div className="section section-js-components">
          <Container>
            <h2 className="mt-lg mb-5">
              <span>Javascript Components</span>
            </h2>
            <Modals />
            <DatePickers />
            <TooltipsPopovers />
            <FileUpload />
          </Container>
        </div>
        <Carousel />
        <NucleoIcons />
      </div>
    </>
  );
}

export default Sample;
