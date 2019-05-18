import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledLink to="/">Puzzle Home</StyledLink>
    </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.div`
  height: 8vh;
  width: 100vw;
  background-color: #FFB300;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding-left: 1.2rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #fff;
    transition: 0.3s ease;
  }
`;