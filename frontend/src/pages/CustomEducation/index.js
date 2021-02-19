import React, { Component } from 'react'
import { Container, Row, Button } from "reactstrap";
import Buttons from "components/argon-design/index-page/Buttons.js";
// import HeaderIndex from "components/argon-design/headers/HeaderIndex";
// import Buttons from "argon-design/"


export default function CustomEducPage () {
    return (
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
        <Buttons />
      </div>
    )
  }