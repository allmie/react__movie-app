import React from "react";
import styled from "styled-components";

const LoaderSection = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const LoaderText = styled.h1`
  position: absolute;
  top: 60px;
  left: 60px;
  font-size: 4em;
  font-weight: 600;
`;

const Loader = () => (
  <LoaderSection>
    <LoaderText>Loading...</LoaderText>
  </LoaderSection>
);

export default Loader;
