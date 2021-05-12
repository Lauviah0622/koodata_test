import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Scores from "./Scores";

import useFetchMovieInfo from "../../hooks/useFetchMovieInfo";

const PageWrapper = styled.div`
  display: flex;
  @media all and (max-width: 990px) {
    flex-direction: column;
    width: 80%;
    margin: auto;
  }
  @media all and (min-width: 990px) {
    & > div {
      width: 50%;
    }
    padding-top: 2rem;
  }
  .poster {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    img {
      object-fit: contain;
      width: 60%;
      @media all and (max-width: 990px) {
        width: 70%;
        max-width: 400px;
      }
    }
  }

  .info {
  }
`;

const Title = styled.h2`
  @media all and (max-width: 990px) {
    text-align: center;
  }
`;

const Content = styled.p``;

const NakedItem = ({ name, children, className }) => (
  <div className={className}>
    <div className="name">{name}：</div>
    <div>{children}</div>
  </div>
);

const Item = styled(NakedItem)`
  display: flex;
  .name {
    width: 8ch;
    font-weight: 500;
    font-size: 1.2em;
  }
`;

export default function HomePage() {
  const { pathname: param } = useLocation();
  const IMDbId = param.match(/tt(\d){6,}/)[0];
  const movieInfo = useFetchMovieInfo(IMDbId);
  console.log('movieInfo', movieInfo);
  const content =
    movieInfo == null ? (
      <div>loading</div>
    ) : (
      <PageWrapper>
        <div className="poster">
          <img src={movieInfo.Poster} alt={movieInfo.Title} />
        </div>
        <div className="info">
          <Title>{movieInfo.Title}</Title>
          <Scores
            data={movieInfo.Ratings}
          />
          <Content>{movieInfo.Plot}</Content>
          <Item name="director">{movieInfo.Director}</Item>
        </div>
      </PageWrapper>
    );

  return content;
}
