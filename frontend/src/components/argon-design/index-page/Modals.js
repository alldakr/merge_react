import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// Core Components
import ModalDefault from "components/argon-design/modals/ModalDefault.js";
import ModalNotification from "components/argon-design/modals/ModalNotification.js";
import ModalForm from "components/argon-design/modals/ModalForm.js";
import ModalLong from "components/argon-design/modals/ModalLong.js";
import ModalMessage from "components/argon-design/modals/ModalMessage.js";
import ModalSignup from "components/argon-design/modals/ModalSignup.js";
import ModalExtraLarge from "components/argon-design/modals/ModalExtraLarge.js";
import ModalLarge from "components/argon-design/modals/ModalLarge.js";
import ModalSmall from "components/argon-design/modals/ModalSmall.js";

function Modals() {
  return (
    <>
      <h3 className="h4 text-success font-weight-bold mb-4">Modals</h3>
      <Row>
        <Col md="4">
          <ModalDefault />
        </Col>
        <Col md="4">
          <ModalNotification />
        </Col>
        <Col md="4">
          <ModalForm />
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <ModalLong />
        </Col>
        <Col md="4">
          <ModalMessage />
        </Col>
        <Col md="4">
          <ModalSignup />
        </Col>
      </Row>
      <h5 className="h5 text-default font-weight-bold mb-5 mt-5">Sizes</h5>
      <ModalExtraLarge />
      <ModalLarge />
      <ModalSmall />
    </>
  );
}

export default Modals;
