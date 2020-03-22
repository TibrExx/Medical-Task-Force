import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Avatar, Button, Grid} from "@material-ui/core";
import {login} from "../store/actions/authAction";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import GoogleLogin from "react-google-login";
import {googleClientId} from "../config";


class NavBar extends Component<any, any> {

  googleResponse = (response: any) => {
    console.log(response);
    if (response.accessToken) {
      this.props.login(response.accessToken, response.profileObj.imageUrl);
    }
  };

  render() {
    const loginSection = this.props.auth.isAuthenticated ?
      (
        <Avatar alt="Remy Sharp" src={this.props.auth.image} />
      ) :
      (
        <GoogleLogin
          clientId={googleClientId}
          render={renderProps => (
            <Button variant="outlined" color="secondary" onClick={renderProps.onClick}>Login mit Google</Button>
          )}
          buttonText="Login"
          onSuccess={this.googleResponse}
          onFailure={() => alert("login failed")}
        />
      );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Grid
              justify="space-between" // Add it here :)
              container
            >
              <Grid item>
                <Typography variant="h5" color="inherit">
                  Medical Reserve
                </Typography>
              </Grid>
              <Grid item>
                {loginSection}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (token: any, image: string) => {
      dispatch(login(token, image));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
