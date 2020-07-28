import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Home,
  QuestionDetails,
  Users,
  Profile,
  Communities,
  MyProfile,
} from "./pages";
import { Layout } from "./components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Route path="/me">
            <MyProfile />
          </Route>
          <Route path="/users/:userId">
            <Profile />
          </Route>
          <Route path="/communities">
            <Communities />
          </Route>
          <Route path="/question/:questionId">
            <QuestionDetails />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
