import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import Loader from "../Loader";
import useFetchMovieImg from "../../hooks/useFetchMovieInfo";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

const SlideWrapper = styled(Swiper)`
  display: flex;
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-white);
  }
`;

const StyledPoster = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const SlideItem = ({ data: IMDbid, className }) => {
  const movieInfo = useFetchMovieImg(IMDbid);
  const poster =
    movieInfo == null ? (
      <Loader />
    ) : (
  <Link to={`/${IMDbid}`}>
  <StyledPoster src={movieInfo.Poster} alt={IMDbid} />
  </Link>
    );
  // const poster = <Loader />;
  return <div className={className}>{poster}</div>;
};

const StyledSlideItem = styled(SlideItem)`
  background-color: var(--color-grey);
  padding-top: 133%;
  width: 100%;
  & img {
    height: 100%;
  }
  > * {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

SwiperCore.use([Navigation]);

export default function Slider({ data }) {
  const slideItems = Array.from(data.slice(0, 15)).map((item, i) => (
    <SwiperSlide key={i}>
      <StyledSlideItem data={item} />
    </SwiperSlide>
  ));

  return (
    <>
      <SlideWrapper
        slidesPerView={3.3}
        spaceBetween={10}
        freeMode={true}
        touchRatio={0.5}
        breakpoints={{
          500: {
            slidesPerView: 4.5,
            spaceBetween: 15,
          },
          990: {
            slidesPerView: 5.5,
            spaceBetween: 20,
          },
        }}
        navigation
      >
        {slideItems}
      </SlideWrapper>
    </>
  );
}
