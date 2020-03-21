import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NavBar from "./components/NavBar";
import {Button} from "@material-ui/core";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignUpForm from "./components/SignUpForm";

export default function App() {
  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">
        <Router>
          <Box my={4}>
            <Typography variant="h5" component="h1" gutterBottom>
              Hast du eine medizinische Ausbildung und willst Krankenhäuser im Kampf gegen Covid-19 unterstützen?
            </Typography>
            <Switch>
              <Route path="/signup">
                <SignUpForm />
              </Route>
              <Route path="/">
                <Button component={Link} to="/signup" variant="contained">Ich möchte helfen!</Button>
              </Route>
            </Switch>
          </Box>
        </Router>
      </Container>
    </div>
  );
}
