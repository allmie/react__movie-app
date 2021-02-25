import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Copyright = styled.h1`
  color: #838884;
  font-size: 0.8em;
  line-height: 1.2em;
`;

const Footer = () => (
  <FooterSection>
    <Copyright>
      allmie, 노마드코더, https://nomadcoders.co/, 2021 02 25
    </Copyright>
    <Copyright>© Copyright 2021</Copyright>
  </FooterSection>
);

export default Footer;
