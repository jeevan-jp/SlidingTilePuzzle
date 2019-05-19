import React from 'react';
import styled from 'styled-components';

const MovesContainer = (props) => {
  return (
    <TextBox>
      <Header>Your Moves</Header>
      <Text>
        display: flex;
      </Text>
    </TextBox>
  )
}

export default MovesContainer;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  margin-top: 5%;
  background: white;
  overflow: scroll;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  background: lightgray;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  margin: 0 8px;
`;