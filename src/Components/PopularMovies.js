import React from "react";
import styled from "styled-components";

const Movie = styled.div`
  // margin: 0 15px;
  margin-bottom: 40px;
`;
const Img = styled.img`
  width: 200px;
  border: 3px solid #ffffff;
  border-radius: 4px;
  margin-bottom: 5px;
`;
const MovieTitle = styled.h2`
  margin-bottom: 5px;
`;
const MovieYear = styled.p`
  color: #8a8886;
`;

const PopularMovies = ({ id, medium_cover_image, title, year }) => (
  <Movie key={id}>
    <Img src={medium_cover_image} alt={title} />
    <MovieTitle>{title}</MovieTitle>
    <MovieYear>{year}</MovieYear>
  </Movie>
);

export default PopularMovies;
