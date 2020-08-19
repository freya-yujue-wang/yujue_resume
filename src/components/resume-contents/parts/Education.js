import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import { resumeContent } from "../../../resumeContent";

export default function Education() {
  return (
    <div>
      <div className="font-color-blue margin-bottom-title">
        <WorkIcon />
        Education
      </div>
      {renderEducation()}
    </div>
  );

  function renderEducation() {
    return resumeContent.educations.map((education) => {
      return (
        <div className="margin-left-content">
          <b>{education.major}</b>
          <div>{education.date}</div>
          <div>{education.school}</div>
          <div>{education.GPA}</div>
        </div>
      );
    });
  }
}
