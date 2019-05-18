import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Timer from '../Timer';

const Button = (props) => {
  return (
    <StyledButton color={props.color}>
      {props.children}
    </StyledButton>
  );
}

const LeftContainer = (props) => {
  const [moves, setMoves] = useState(0);
  return (
    <StyledContainer>
      <div>Time: <Timer start={0} /></div>
      <br />
      <div>Moves: {moves}</div>
      <br />
      <ButtonContainer>
        <Button color={"#F79331"}>New Game</Button>
        <Button color={"#8CC63E"}>Auto Solve</Button>
        <Button color={"#f04d59"}>Shuffle Board</Button>
      </ButtonContainer>
    </StyledContainer>
  );
}

export default LeftContainer;

const StyledContainer = styled.div`
  padding: 0.8rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;

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