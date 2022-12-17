import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const home = () => {
  return (
    <div className="h-screen justify-center items-center flex w-full">
      <Hero />
      <Skills />
    </div>
  );
};

export default home;
