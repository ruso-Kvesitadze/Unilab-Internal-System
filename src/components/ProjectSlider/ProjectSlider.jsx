import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProjecData } from "../../data";
import { SProjectDiv, SProjectCard, SProjectImg } from "./ProjectSlider.Styled";

export const ProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SProjectDiv>
      <Slider {...settings}>
        {ProjecData.map((item) => (
          <SProjectCard key={item.id}>
            <SProjectImg src={item.src} alt={item.id} />
          </SProjectCard>
        ))}
      </Slider>
    </SProjectDiv>
  );
};
