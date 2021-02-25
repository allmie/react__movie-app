import Loader from "Components/Loader";
import Movies from "Components/Movies";
import React from "react";
import styled from "styled-components";

const Page = styled.div`
  padding-top: 50px;
  color: #ffffff;
  z-index: -1;
  width: 100vw;
`;

const PopularMovieSection = styled.section`
  padding: 0 100px;
`;
const PopularSectionTitle = styled.h2`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  border-bottom: 1px solid #8a8886;
  & i {
    margin-right: 10px;
  }
`;
const PopularSectionText = styled.span`
  font-weight: 600;
`;
const MovieSection = styled.div`
  margin: 25px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 20px;
  row-gap: 40px;
`;

const HighRateMovieSection = styled.section`
  padding: 0 100px;
  background-color: #262525;
`;
const HighRateSectionTitle = styled.h4`
  padding: 20px 30px 5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HighRateSectionText = styled.span`
  font-weight: 600;
  font-size: 1.1em;
`;
const MoreSearch = styled.span`
  color: #838884;
`;

const HomePresenter = ({ highRate, popular, loading, error }) =>
  loading ? (
    <Page>
      <Loader />
    </Page>
  ) : (
    <Page>
      <PopularMovieSection>
        <PopularSectionTitle>
          <i className="fas fa-star" style={{ color: "#6bc146" }}></i>
          <PopularSectionText>Popular Download</PopularSectionText>
        </PopularSectionTitle>
        <MovieSection>
          {popular &&
            popular.length > 0 &&
            popular.map((element) => <Movies key={element.id} {...element} />)}
        </MovieSection>
      </PopularMovieSection>
      <HighRateMovieSection>
        <HighRateSectionTitle>
          <HighRateSectionText>Latest YIFY Movies Torrents</HighRateSectionText>
          <MoreSearch>Browse All</MoreSearch>
        </HighRateSectionTitle>
        <MovieSection>
          {highRate &&
            highRate.length > 0 &&
            highRate.map((element) => <Movies key={element.id} {...element} />)}
        </MovieSection>
      </HighRateMovieSection>
    </Page>
  );

export default HomePresenter;
