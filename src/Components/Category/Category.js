import React from "react";
import styled from "styled-components";

import Slider from "./Slider";
import useFetchMovieData from '../../hooks/useFetchMovies';

const Title = styled.h2``;

const Wrapper = styled.div``;

export default function Category({ title, endpoint, name}) {
  const data = useFetchMovieData(endpoint, name)
  console.log('catacory', data);
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Slider endpoint={endpoint} data={data}/>
    </Wrapper>
  );
}
