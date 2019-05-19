import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../Button';
// import { sayHi } from '../../utils/misc';

class ButtonBoard extends React.Component {
  state = {
    row: 4,
    column: 4,
    board: [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15, '']],
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    const { row,column } = this.state;
    console.log(row, column);
  }

  handleLeft = () => {
    const { column } = this.state;
    if(column > 1) {
      this.setState({ column: column - 1 });
    }
  }

  handleTop = () => {
    const { row } = this.state;
    if(row > 1) {
      this.setState({ row: row - 1 });
    }
  }

  handleRight = () => {
    const { column } = this.state;
    if(column < 4) {
      this.setState({ column: column + 1 });
    }
  }

  handleDown = () => {
    const { row, column } = this.state;
    if(row < 4) {
      this.setState({ row: row + 1 });
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
    const { board } = this.state;
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