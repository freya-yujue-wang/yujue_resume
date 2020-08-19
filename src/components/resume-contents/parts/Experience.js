import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import { resumeContent } from "../../../resumeContent";

export default function Experience() {
  return (
    <div>
      <div className="font-color-blue margin-bottom-title ">
        <WorkIcon />
        Experience
      </div>
      {renderExperience()}
    </div>
  );

  function renderExperience() {
    return resumeContent.experiences.map((experience) => {
      return (
        <div className="margin-left-content">
          <b>{experience.title}</b>
          <div>{experience.title}</div>
          <div>{experience.title}</div>
          <ul>
            {experience.details.map((detail) => {
              return <li className="grey">{detail} </li>;
            })}
          </ul>
        </div>
      );
    });
  }
}
