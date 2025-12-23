import React from "react";
import { MainPage } from "../MainPage/MainPage";
import { About } from "../About/About";
import { Experiece } from "../Experience/Experience";
import { Projects } from "../Projects/Projects";
import { Research } from "../Research/Research";
import { Contact } from "../Contact/Contact";

export const Home = () => {
  return (
    <>
      <MainPage />
      <About />
      <Projects />
      <Research />
      <Experiece />
      <Contact />
    </>
  );
};

