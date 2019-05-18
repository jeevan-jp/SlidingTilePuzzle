import React, { useState } from 'react';
import styled from 'styled-components';

import Timer from '../Timer';
import Button from '../Button';

const LeftContainer = (props) => {
  const [moves, setMoves] = useState(0);
  return (
    <StyledContainer>
      <div>Time: <Timer start={0} /></div>
      <br />
      <div>Moves: {moves}</div>
      <br />
      <ButtonContainer>
        <Button bgColor={"#F79331"} color={"white"}>New Game</Button>
        <Button bgColor={"#8CC63E"} color={"white"}>Auto Solve</Button>
        <Button bgColor={"#f04d59"} color={"white"}>Shuffle Board</Button>
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