import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledButton color={props.color}>
      {props.children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  width: 90%;
  min-height: 32px;
  border-radius: 5px;
  outline: none;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.8s;
  background-position: center;
  ${props => props.color && css`
      background: ${props.color};
  `};

  &:hover {
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
  }

  &:active {
  background-color: #6eb9f7;
  background-size: 100%;
  transition: background 0s;
  }
`;