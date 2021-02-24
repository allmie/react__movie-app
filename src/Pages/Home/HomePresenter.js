import Loader from "Components/Loader";
import PopularMovies from "Components/PopularMovies";
import React from "react";
import styled from "styled-components";

const Page = styled.div`
  position: relative;
  top: 50px;
  color: #ffffff;
  margin: 0 100px;
  z-index: -1;
`;

const SectionTitle = styled.h2`
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
const SectionText = styled.span`
  font-weight: 600;
`;
const Section = styled.section`
  padding: 20px 30px;
  width:
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 20px;
`;

const HomePresenter = ({ movies, loading, error }) =>
  loading ? (
    <Page>
      <Loader />
    </Page>
  ) : (
    <Page>
      <SectionTitle>
        <i className="fas fa-star" style={{ color: "#6bc146" }}></i>
        <SectionText>Popular Download</SectionText>
      </SectionTitle>
      <Section>
        {movies &&
          movies.length > 0 &&
          movies.map((element) => (
            <PopularMovies key={element.id} {...element} />
          ))}
      </Section>
    </Page>
  );

export default HomePresenter;
