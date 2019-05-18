import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Content from '../../components/Content';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
      </Container>
    );
  }
}

export default Home;

const Container = styled.div`
  display: flex:
  flex-direction: column;
  flex: 1;
`;
