import React from "react";
import Experience from "./parts/Experience";
import Project from "./parts/Project";
import Education from "./parts/Education";
import Skill from "./parts/Skill";
import "./ResumeContent.css";

//React 16.8 React hook
export default function ResumeContent() {
  return (
    <div>
      <Experience />
      <Project />
      <Education />
      <Skill />
    </div>
  );
}
