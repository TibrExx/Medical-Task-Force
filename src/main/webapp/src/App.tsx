import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NavBar from "./components/NavBar";
import {Button} from "@material-ui/core";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignUpForm from "./components/SignUpForm";
import WelcomeScreen from "./components/WelcomeScreen";
import ListView from "./container/ListView";

export default function App() {
  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">
        <Router>
          <Box my={4}>
            <Switch>
              <Route path="/signup">
                <SignUpForm />
              </Route>
              <Route path="/list">
                <ListView />
              </Route>
              <Route path="/">
                <WelcomeScreen />
              </Route>
            </Switch>
          </Box>
        </Router>
      </Container>
    </div>
  );
}
