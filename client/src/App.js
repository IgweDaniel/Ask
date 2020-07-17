import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, FullQuestion } from "./pages";
import { Layout } from "./components/";
import { GlobalStyle, theme } from "./genericStyle";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Route path="/question/:questionId">
            <FullQuestion />
          </Route>
          <Route path="/users">
            <div>user</div>
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
