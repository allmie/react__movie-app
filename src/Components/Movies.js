import React from "react";
import styled from "styled-components";

const Movie = styled.div`
  margin-bottom: 40px;
  max-width: 210px;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  border: 4px solid #ffffff;
  border-radius: 4px;
  margin-bottom: 5px;
  &:hover {
    border: 4px solid #0afe3c;
    Img {
      opacity: 0.2;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  z-index: -1;
`;
const DetailInfo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  text-align: center;
  z-index: -1;
`;
const Icon = styled.span`
  display: block;
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const Rating = styled.span`
  display: block;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 15px;
`;
const Genres = styled.ul``;
const Genre = styled.li`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 5px;
`;
const Button = styled.button`
  color: #ffffff;
  background-color: #0afe3c;
  border-radius: 5px;
  position: absolute;
  bottom: 30px;
  width: 65%;
  height: 30px;
  left: 40px;
  &: hover {
    outline: none;
  }
`;

const MovieTitle = styled.h5`
  margin-bottom: 5px;
`;
const MovieYear = styled.p`
  color: #8a8886;
`;

const Movies = ({ id, medium_cover_image, title, year, genres, rating }) => (
  <Movie key={id}>
    <ImageContainer>
      <Img src={medium_cover_image} alt={title} />
      <DetailInfo>
        <Icon>
          <i className="fas fa-star" style={{ color: "#6bc146" }}></i>
        </Icon>
        <Rating>{`${rating} / 10`}</Rating>
        <Genres>
          {genres &&
            genres.map((genre, index) => (
              <Genre key={index}>{`${genre} `}</Genre>
            ))}
        </Genres>
        <Button>View Detail</Button>
      </DetailInfo>
    </ImageContainer>
    <MovieTitle>{title}</MovieTitle>
    <MovieYear>{year}</MovieYear>
  </Movie>
);

export default Movies;
