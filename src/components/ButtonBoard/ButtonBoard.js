import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../Button';
import { swapValues, checkWin } from '../../utils/misc';
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
    row: 4,
    column: 4,
    board: [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15, '']],
  }

  componentDidMount() {
    console.log(this.props.moves);
    // this.setState({ board: this.props.moves.slice(-1).board });
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleLeft = () => {
    const { row, column, board } = this.state;
    if(column > 1) {
      const moveCoords = [row-1, column-1, row-1, column-2];
      this.props.addMove(moveCoords, board);
      this.setState({
        column: column - 1,
        board: swapValues(board, moveCoords)
      });
    }
  }

  handleTop = () => {
    const { row, column, board } = this.state;  
    if(row > 1) {
      const moveCoords = [row-1, column-1, row-2, column-1];
      this.props.addMove(moveCoords, board);
      this.setState({
        row: row - 1,
        board: swapValues(board, moveCoords)
      });
    }
  }

  handleRight = () => {
    const { row, column, board } = this.state;
    if(column < 4) {
      const moveCoords = [row-1, column-1, row-1, column];
      this.props.addMove(moveCoords, board);
      this.setState({
        column: column + 1,
        board: swapValues(board, moveCoords)
      });
    }
  }

  handleDown = () => {
    const { row, column, board } = this.state;
    if(row < 4) {
      const moveCoords = [row-1, column-1, row, column-1];
      this.props.addMove(moveCoords, board);
      this.setState({
        row: row + 1,
        board: swapValues(board, moveCoords)
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
    checkWin(this.state.board);
  }

  renderButtons = () => {
    let { board } = this.state;
    const { moves } = this.props;
    console.log(moves);
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