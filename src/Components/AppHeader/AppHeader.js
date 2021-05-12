import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { ReactComponent as BackIcon } from "./arrow.svg";

const LogoTitle = styled.h1`
  font-weight: 400;
  font-size: 2.5rem;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
  margin: 0;
  text-align: right;
`;

const LogoSubTitle = styled.h2`
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
  text-align: right;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledBackIcon = styled(BackIcon)`
  fill: var(--color-font);
  padding: 0.5em;
  height: 2em;
  transition: 0.2s ease-out;
  &:hover {
    filter: drop-shadow(0px 0px 3px var(--color-font));
  }
`;

export default function AppLogo() {
  const history = useHistory();

  return (
    <HeaderWrapper>
      <Switch>
        <div className="backBtn">
          <Route exact path={/\/tt(\d){6,}/}>
            <StyledBackIcon
              onClick={() => {
                history.goBack();
              }}
            />
          </Route>
        </div>
      </Switch>
      <div className="logo">
        <LogoTitle>Online Movie System</LogoTitle>
        <LogoSubTitle>Find the hottest movies</LogoSubTitle>
      </div>
    </HeaderWrapper>
  );
}
