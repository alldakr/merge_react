import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";

import Dashboard from "pages/Admin/Dashboard";

export default function Admin() {
  return (
    <div>
      <div className="section section-js-components">
        <Container>
          <Dashboard />
        </Container>
      </div>
    </div>
  );
}
