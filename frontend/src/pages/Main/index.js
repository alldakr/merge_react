import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import MainCarousel from "pages/Main/MainCarousel";
import ServiceExp from "pages/Main/ServiceExplanation";
import LectureApply from "pages/Main/LectureApply";

function Home() {
  return (
    <>
      <MainCarousel />
      <ServiceExp />
      <LectureApply />
    </>
  );
}

export default Home;
