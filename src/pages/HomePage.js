import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import ProjectHighlights from "../components/home/ProjectHighlights";
import SkillsSnapshot from "../components/home/SkillsSnapshot";
import ExperienceSnapshot from "../components/home/ExperienceSnapshot";
import CallToAction from "../components/home/CallToAction";
import ParticlesBackground from "../components/layout/ParticlesBackground";
import "./HomePage.css";

const HomePage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParticlesBackground />
      <Hero />
      <ProjectHighlights />
      <SkillsSnapshot />
      <ExperienceSnapshot />
      <CallToAction />
    </>
  );
};

export default HomePage;