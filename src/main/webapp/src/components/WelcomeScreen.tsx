import Typography from "@material-ui/core/Typography";
import {Button, Grid, Tooltip} from "@material-ui/core";
import {Link, withRouter} from "react-router-dom";
import React, {Component} from "react";
import ArrowForward from '@material-ui/icons/ArrowForward';
import logo from '../assets/logo.jpeg';
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";

class WelcomeScreen extends Component<any, any> {
  render() {
    const actionButtons = this.props.auth.isAuthenticated ? (
      <div>
        <Box>
          <Button component={Link} to="/signup" variant="contained" color="primary" size="large"
                  endIcon={<ArrowForward/>}>Ich möchte helfen</Button>
        </Box>
        <Box mt={2}>
          <Button component={Link} to="/list" variant="outlined" color="primary" size="large"
                  endIcon={<ArrowForward/>}>Zu den Freiwilligen</Button>
        </Box>
      </div>
    ) : (
      <div>
        <Box>
          <Tooltip title="Bitte zuerst Anmelden" placement="right">
            <span>
              <Button component={Link} to="" variant="contained" color="primary" size="large" disabled
                  endIcon={<ArrowForward/>}>Ich möchte helfen</Button>
            </span>
          </Tooltip>
        </Box>
        <Box mt={2}>
          <Tooltip title="Bitte zuerst Anmelden" placement="right">
            <span>
              <Button component={Link} to="" variant="outlined" color="primary" size="large" disabled
                  endIcon={<ArrowForward/>}>Zu den Freiwilligen</Button>
            </span>
          </Tooltip>
        </Box>
      </div>
    );
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item sm={3}>
            <img src={logo} width={200} alt="Medical Reserve Logo"/>
          </Grid>
          <Grid item sm={9}>
            <Typography variant="h2" component="h1" gutterBottom>
              Willkommen bei Medical Reserve
            </Typography>
            <Typography variant="h6" component="h2" paragraph={true} gutterBottom>
              Heute ist es wichtig zusammenzuhalten und gemeinsam die anstehenden Aufgaben zu bewältigen. <br/> Jeder
              einzelne zählt und mit deiner Registrierung kannst du dabei helfen!
            </Typography>
            {actionButtons}
          </Grid>
        </Grid>
      </div>
    );
  };
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(WelcomeScreen));
