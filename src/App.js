import React from "react";
import styled from "styled-components";

import { Switch, Route, Redirect } from "react-router-dom";

import AppHeader from "./Components/AppHeader";
import Homepage from "./Page/Homepage";
import Movie from "./Page/Movie";

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem;

  main {
    flex-grow: 1;
  }
`;

function App() {
  return (
    <AppWrapper>
      <AppHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path={/\/tt(\d){6,}/}>
            <Movie />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </AppWrapper>
  );
}

export default App;
