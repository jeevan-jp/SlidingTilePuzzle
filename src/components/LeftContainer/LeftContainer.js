import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Timer from '../Timer';
import Button from '../Button';
import { ResetGame } from '../../actions/ResetGame';
import { ResetTimer } from '../../actions/timerReducer';

const mapStateToProps = store => ({
    moves: store.moves,
});

const mapDispatcherToProps = dispatch => ({
  ResetGame: () => dispatch(ResetGame()),
  ResetTimer: () => dispatch(ResetTimer())
});

const LeftContainer = ({ moves, ResetGame, ResetTimer, autoSolve }) => {
  return (
    <StyledContainer>
      <div>Time: <Timer start={0} /></div>
      <br />
      <div>Moves: {moves.length}</div>
      <br />
      <ButtonContainer>
        <Button
          bgColor={"#F79331"}
          color={"white"}
          onClick={async () => {
            await ResetGame();
            await ResetTimer();
            window.location.reload();
          }}
        >
          New Game
        </Button>
        <Button
          bgColor={"#8CC63E"}
          color={"white"}
          onClick={() => {
            autoSolve();
          }}
        >Auto Solve</Button>
        <Button
          bgColor={"#f04d59"}
          color={"white"}
          onClick={() => {
            ResetGame();
            window.location.reload();
          }}
        >
         Shuffle Board
        </Button>
      </ButtonContainer>
    </StyledContainer>
  );
}

export default connect(mapStateToProps, mapDispatcherToProps)(LeftContainer);

LeftContainer.propTypes = {
  moves: PropTypes.array.isRequired,
  ResetGame: PropTypes.func.isRequired,
  ResetTimer: PropTypes.func.isRequired,
};

const StyledContainer = styled.div`
  padding: 0.8rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;