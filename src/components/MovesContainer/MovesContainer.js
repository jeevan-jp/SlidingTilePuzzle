import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  moves: store.moves,  
});

class MovesContainer extends React.Component {
  static propTypes = {
    moves: PropTypes.array.isRequired,
  };

  containerRef = React.createRef();

  renderMoves = () => {
    const ref = this.containerRef.current;
    if(ref) {
      ref.scrollTo(0, ref.scrollHeight);
    }
  
    const { moves } = this.props;
    return moves.map(({coords}) => (
      <StyledSteps key={'moveTaken' + Math.random()*10001}>
        You moved from ({coords[0]+1}, {coords[1]+1}) to ({coords[2]+1}, {coords[3]+1})
      </StyledSteps>
    ));
  }

  render() {
    return (
      <TextBox ref={this.containerRef}>
        <Header>Your Moves</Header>
        <Text>
          {this.renderMoves()}
        </Text>
      </TextBox>
    );
  }
}

export default connect(mapStateToProps)(MovesContainer);

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
  margin: 0 8px;
`;

const StyledSteps = styled.div`
  margin-bottom: 1rem;
`;