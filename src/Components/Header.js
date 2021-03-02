import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1d1d1d;
  color: #8a8886;
  font-size: 15px;
  padding-top: 5px;
  overflow: hidden;
  z-index: 2;
`;
const PageTitle = styled.span`
  display: flex;
  align-items: center;
  margin-left: 70px;
`;

const Logo = styled.h1`
  color: #6bc146;
  font-size: 2.4em;
  font-weight: 600;
`;
const Desc = styled.p`
  font-size: 1.2em;
  margin-left: 20px;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 80px;
`;
const SearchForm = styled.form`
  width: 200px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid rgba(138, 136, 134, 0.51);
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding-left: 8px;
  font-size: 0.9em;
`;
const SearchInput = styled.input`
  width: 85%;
  background-color: #1d1d1d;
  border: none;
  color: #8a8886;
  font-weight: 600;
  font-size: 0.9em;
  // padding-left: 10px;
  &:focus {
    outline: none;
  }
`;
const MenuItem = styled.li`
  font-size: 0.9em;
  font-weight: 600;
  margin-right: 18px;
  &:nth-child(3) {
    color: #6bc146;
  }
`;
const FormButton = styled.div`
  display: flex;
`;
const Button = styled.span`
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Navigation>
      <PageTitle>
        <Logo>YTS.xx</Logo>
        <Desc>HD movies all the smallest file size.</Desc>
      </PageTitle>
      <Menu>
        <SearchForm action="" method="get">
          🔍
          <SearchInput type="text" placeholder="Quick search" />
        </SearchForm>
        <MenuItem>Home</MenuItem>
        <MenuItem>4k</MenuItem>
        <MenuItem>Trending</MenuItem>
        <MenuItem>Browser Movies</MenuItem>
        <FormButton>
          <Button>Login</Button>&nbsp;|&nbsp;<Button>Register</Button>
        </FormButton>
      </Menu>
    </Navigation>
  );
};

export default Header;
