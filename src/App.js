import React, { useEffect } from "react";
import "./App.css";
import ResumeHeader from "./components/ResumeHeader";
import ResumeContent from "./components/resume-contents/ResumeContent";
import Grid from "@material-ui/core/Grid";
import ReactGA from "react-ga";

//base componment
function App() {
  // componentDidMount
  useEffect(() => {
    ReactGA.initialize("UA-175997340-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <Grid container justify="center">
        <Grid container item xs={4}>
          <ResumeHeader />
        </Grid>

        <Grid container item xs={8}>
          <ResumeContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
