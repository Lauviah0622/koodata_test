import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Scores from "./Scores";
import useFetchMovieInfo from "../../hooks/useFetchMovieInfo";
import NakedLoader from "../../Components/Loader";

const PageWrapper = styled.div`
  display: flex;
  min-height: 50vh;
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
`;

const Title = styled.h2`
  @media all and (max-width: 990px) {
    text-align: center;
  }
`;

const Content = styled.p``;



const Loader = styled(function ({ className }) {
  return (<div className={className}>
    <NakedLoader />
  </div>)
})`
  padding-top: 35vh;
`;
// I think its more clearier than create two components if both components and style are simple , but maybe its discustnig to other one...

const NakedItem = ({ name, children, className }) => (
  <div className={className}>
    <div className="name">{name}</div>
    <div>{children}</div>
  </div>
);

const Item = styled(NakedItem)`
  font-size: 1.2em;
  display: flex;
  .name {
    &::after {
      content: "：";
      position: absolute;
      right: 0;
    }
    margin-bottom: 0.5em;
    position: relative;
    width: 10ch;
    font-weight: 500;

    flex-shrink: 0;
  }
`;

export default function HomePage() {
  const { pathname: param } = useLocation();
  const IMDbId = param.match(/tt(\d){6,}/)[0];
  const movieInfo = useFetchMovieInfo(IMDbId);
  const content =
    movieInfo == null ? (
      <Loader />
    ) : (
      <PageWrapper>
        <div className="poster">
          <img src={movieInfo.Poster} alt={movieInfo.Title} />
        </div>
        <div className="info">
          <Title>{movieInfo.Title}</Title>
          <Scores data={movieInfo.Ratings} />
          <Content>{movieInfo.Plot}</Content>
          <Item name="Director">{movieInfo.Director}</Item>
          <Item name="Actors">{movieInfo.Actors}</Item>
          <Item name="Writer">{movieInfo.Writer}</Item>
          <Item name="Year">{movieInfo.Year}</Item>
          <Item name="Genre">{movieInfo.Genre}</Item>
        </div>
        </PageWrapper>
    );
  return content;
}
