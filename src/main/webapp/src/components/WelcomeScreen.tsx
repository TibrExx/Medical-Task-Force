import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";
import ArrowForward from '@material-ui/icons/ArrowForward';

const WelcomeScreen = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom>
        Willkommen bei Medical Reserve
      </Typography>
      <Typography variant="h5" component="h2" paragraph={true} gutterBottom>
        Heute ist es wichtig zusammenzuhalten und gemeinsam die anstehenden Aufgaben zu bewältigen. <br/>  Jeder einzelne zählt und mit deiner Registrierung kannst du dabei helfen!
      </Typography>
      <Button component={Link} to="/signup" variant="contained" color="primary" size="large" endIcon={<ArrowForward/>}>Ich möchte helfen</Button>
    </div>
  );
};

export default WelcomeScreen;
