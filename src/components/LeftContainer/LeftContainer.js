import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Timer from '../Timer';
import Button from '../Button';

const mapStateToProps = store => ({
    moves: store.moves,
});

const LeftContainer = ({moves}) => {
  return (
    <StyledContainer>
      <div>Time: <Timer start={0} /></div>
      <br />
      <div>Moves: {moves.length}</div>
      <br />
      <ButtonContainer>
        <Button bgColor={"#F79331"} color={"white"}>New Game</Button>
        <Button bgColor={"#8CC63E"} color={"white"}>Auto Solve</Button>
        <Button bgColor={"#f04d59"} color={"white"}>Shuffle Board</Button>
      </ButtonContainer>
    </StyledContainer>
  );
}

export default connect(mapStateToProps)(LeftContainer);

LeftContainer.propTypes = {
  moves: PropTypes.array.isRequired,
};

const StyledContainer = styled.div`
  padding: 0.8rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;