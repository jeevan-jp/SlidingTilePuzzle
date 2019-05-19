import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../Button';
// import { sayHi } from '../../utils/misc';

const ButtonBoard = (props) => {
  const [row, setCurrentRow] = useState(4);
  const [column, setCurrentColumn] = useState(4);
  const [board, setBoard] = useState([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15, '']]);
  
  useEffect(() => {  
    const handleLeft = () => {
      if(column > 1) {
        setCurrentColumn(column - 1);
        console.log(row, column);
      }
    }

    const handleTop = () => {
      if(row > 1) {
        setCurrentRow(row - 1);
        console.log(row, column);
      }
    }

    const handleRight = () => {
      if(column < 4) {
        setCurrentColumn(column + 1);
        console.log(row, column);
      }
    }

    const handleDown = () => {
      if(row < 4) {
        setCurrentRow(row + 1);
        console.log(row, column);
      }
    }

    const handleKeyDown = (e) => {
      const { keyCode } = e;
      switch(keyCode) {
        case 37:
          handleLeft();
          break;
        case 38:
          handleTop();
          break;
        case 39:
          handleRight();
          break;
        case 40:
          handleDown();
          break;
        default:
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.addEventListener('keydown', handleKeyDown);
    }
  }, [row, column]);

  const renderButtons = () => {
    return board.flat().map(num => (
      num === '' ? (
      <Button bgColor={"green"} key={'button' + num}>
        {num}
      </Button>
      ) : (
        <Button key={'button' + num}>
          {num}
        </Button>
      )
    ));
  }

  return (
    <Container>
      <ButtonContainer>
        {renderButtons()}
      </ButtonContainer>
    </Container>
  );
}

export default ButtonBoard;

const Container =  styled.div`
  display: flex;
  flex: 1;
  height: 50%;
  max-height: 200px;
  margin: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 6px;
  background: #e6e6e6;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto; 
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;