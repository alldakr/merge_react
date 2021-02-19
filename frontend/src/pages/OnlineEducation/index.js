import React, { Component } from 'react'
import { Container, Row, Button } from "reactstrap";
import Tables from "components/argon-design/index-page/Tables.js";
import Comments from "components/argon-design/index-page/Comments.js";
import Chat from "components/argon-design/index-page/Chat.js";
import Cards from "components/argon-design/index-page/Cards.js";

export default function OnlineEduPage () {
    return (
      <div>
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
      </div>
    )
  }
