import React from "react";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { resumeContent } from "../../../resumeContent";
import Chip from "@material-ui/core/Chip";

export default function Skill() {
  return (
    <div>
      <div className="font-color-blue margin-bottom-title">
        <AttachFileIcon />
        Skill
      </div>
      {renderSkills()}
    </div>
  );

  function renderSkills() {
    return resumeContent.skills.map((skill) => (
      <Chip
        clickable
        label={skill}
        className="background-color-blue margin-left-content"
      />
    ));
  }
}
