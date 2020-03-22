import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import NavBar from "./container/NavBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpForm from "./components/SignUpForm";
import WelcomeScreen from "./components/WelcomeScreen";
import ListView from "./container/ListView";
import {Provider} from "react-redux";
import {store} from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Container maxWidth="lg">
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
          </Container>
        </div>
      </Router>
    </Provider>
  );
}
