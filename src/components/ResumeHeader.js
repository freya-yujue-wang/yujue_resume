import React, { useState } from "react";
import { resumeContent } from "../resumeContent";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./ResumeHeader.css";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import ReactGA from "react-ga";

//React 16.8 React hook
export default function ResumeHeader() {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  return (
    <div className="background-color-blue full-size">
      <h2>{resumeContent.name}</h2>
      <h4>{resumeContent.title}</h4>
      <h5>{resumeContent.location}</h5>
      <p>{resumeContent.selfIntro}</p>
      <div>
        <Button
          color="primary"
          onClick={(event) => handleEmailClick(resumeContent.email)}
          startIcon={<EmailIcon />}
        >
          {resumeContent.email}
        </Button>
      </div>

      <p>
        <PhoneIcon /> {resumeContent.phone}
      </p>

      <div>
        <Button
          color="primary"
          onClick={(event) =>
            handleGitHubClick(`https://github.com/${resumeContent.github}`)
          }
          startIcon={<GitHubIcon />}
        >
          {resumeContent.github}
        </Button>
      </div>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert onClose={handleCloseSnackBar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );

  function handleEmailClick(content) {
    ReactGA.event({
      category: "user",
      action: "Email button clicked",
    });
    navigator.clipboard.writeText(content).then(() => {
      setOpenSnackBar(true);
      setSnackbarMessage(`Sucessfuuly copied "${content}" to clipboard!`);
    });
  }

  function handleCloseSnackBar() {
    setOpenSnackBar(false);
  }

  function handleGitHubClick(link) {
    ReactGA.event({
      category: "user",
      action: "Github button clicked",
    });
    window.open(link);
  }
}
