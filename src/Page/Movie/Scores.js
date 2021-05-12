import React from "react";
import styled from "styled-components";

import { ReactComponent as ImdbIcon } from "./imdb.svg";
import { ReactComponent as TomatoICon } from "./rotten_tomato.svg";
import { ReactComponent as MetaIcon } from "./metacritic.svg";

const IconWrapper = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledIcon = styled(IconWrapper)`
  display: block;
  position: relative;
  width: 1.5rem;
  padding-top: 1.5rem;
  svg {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
`;

function Scores({ data, className }) {

  const scores = data.map(score => {
    let Icon;
    switch (score.Source) {
      case ('Internet Movie Database'):
        Icon = <ImdbIcon />
        break
      case ('Rotten Tomatoes'):
        Icon = <TomatoICon />
        break
      case ('Metacritic'):
        Icon = <MetaIcon />
        break
      default:
    }
    return (
      <>
        <StyledIcon>{Icon}</StyledIcon>
        <span>{score.Value}</span>
      </>
    )
  })

  return (
    <div className={className}>
      {scores}
      {/* <StyledIcon>
        <ImdbIcon />
      </StyledIcon>
      <span>{data.idmb}</span>
      <StyledIcon>
        <TomatoICon />
      </StyledIcon>
      <span>{data.tomato}</span>
      <StyledIcon>
        <MetaIcon />
      </StyledIcon>
      <span>{data.metacritic}</span> */}
    </div>
  );
}

const styledScores = styled(Scores)`
  display: flex;
  & > * {
    margin-right: 2ch;
  }

  @media all and (max-width: 990px) {
    justify-content: center; 
  }
`;

export default styledScores;
