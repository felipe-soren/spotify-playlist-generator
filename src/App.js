import React from "react";

import GlobalStyle from "./styles/global";

import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";

function App() {
  return (
    <>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </>
  );
}

export default App;
