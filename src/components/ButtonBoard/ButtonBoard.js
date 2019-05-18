import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledButton>
      {props.children}
    </StyledButton>
  )
}

const ButtonBoard = (props) => {
  let count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  return (
    <Container>
      <ButtonContainer>
        {
          count.map(num => (
            <Button key={'button' + num}>
              {num}
            </Button>
          ))
        }
      </ButtonContainer>
    </Container>
  )
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

const StyledButton = styled.button`
  displau: flex;
  flex: 1;
  height: 100%;
`;