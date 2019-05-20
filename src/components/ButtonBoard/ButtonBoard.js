import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../Button';
import { swapValues, checkWin, ShuffleBoard, findCoordsOfEmptyTile } from '../../utils/misc';
import { addMove } from '../../actions/addMove';

const mapStateToProps = state => ({
  moves: state.moves,
});

const mapDispatchToProps = dispatch => ({
    addMove: (coords, board) => dispatch(addMove(coords, board))
});

class ButtonBoard extends React.Component {
  static propTypes = {
    addMove: PropTypes.func.isRequired,
    moves: PropTypes.array.isRequired,
  }

  state = {
    row: 3,
    column: 3,
    board: [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15, '']],
  }

  componentDidMount() {
    // setting up row, column (saved config from redux)
    const { moves } = this.props;
    if(moves.length) {
      const { coords, board } = moves[moves.length - 1];
      this.setState({
        row: coords[2],
        column: coords[3],
        board,
      });
    } else {
      // set up new random board
      const board = ShuffleBoard();
      const [row, column] = findCoordsOfEmptyTile(board);
      console.log(row, column, board);
    }
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleLeft = () => {
    const { row, column, board } = this.state;
    if(column > 0) {
      const moveCoords = [row, column, row, column-1];
      this.props.addMove(moveCoords, board);
      this.setState({
        column: column - 1,
        board: swapValues(board, moveCoords)
      });
    }
  }

  handleTop = () => {
    const { row, column, board } = this.state;
    if(row > 0) {
      const moveCoords = [row, column, row-1, column];
      this.props.addMove(moveCoords, board);
      this.setState({
        row: row - 1,
        board: swapValues(board, moveCoords)
      });
    }
  }

  handleRight = () => {
    const { row, column, board } = this.state;
    if(column < 3) {
      const moveCoords = [row, column, row, column + 1];
      this.props.addMove(moveCoords, board);
      this.setState({
        column: column + 1,
        board: swapValues(board, moveCoords)
      }, () => {
        const { moves } = this.props;
        checkWin(moves[moves.length - 1].board);
      });
    }
  }

  handleDown = () => {
    const { row, column, board } = this.state;
    if(row < 3) {
      const moveCoords = [row, column, row + 1, column];
      this.props.addMove(moveCoords, board);
      this.setState({
        row: row + 1,
        board: swapValues(board, moveCoords)
      }, () => {
        const { moves } = this.props;
        checkWin(moves[moves.length - 1].board);
      });
    }
  }

  handleKeyDown = (e) => {
    const { keyCode } = e;
    switch(keyCode) {
      case 37:
        this.handleLeft();
        break;
      case 38:
        this.handleTop();
        break;
      case 39:
        this.handleRight();
        break;
      case 40:
        this.handleDown();
        break;
      default:
        break;
    }
  }

  renderButtons = () => {
    let { board } = this.state;
    const { moves } = this.props;
    if(moves.length) {
      board = moves[moves.length - 1].board;
    }
  
    return board.flat().map(num => (
      num === '' ? (
      <Button bgColor={"green"} key={'button' + Math.random()*10005}>
        {num}
      </Button>
      ) : (
        <Button key={'button' + Math.random()*10001}>
          {num}
        </Button>
      )
    ));
  }

  render() {
    return (
      <Container>
        <ButtonContainer>
          {this.renderButtons()}
        </ButtonContainer>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBoard);

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