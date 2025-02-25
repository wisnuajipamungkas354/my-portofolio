import React, { useState } from "react";
import Home from "./Home";
import Socmed from "./Socmed";
import About from "./About";
import SkillSet from "./Skillset";
import Experience from "./Experience";
import Portofolio from "./Portofolio";
import Review from "./Review";

const Index = ({ skills, reviews }) => {
  
  return (
    <>
      <Home listSkills={skills} />
      <Socmed />
      <About />
      <SkillSet />
      <Experience />
      <Portofolio />
      <Review reviews={reviews} />
    </>
  );
}

export default Index;