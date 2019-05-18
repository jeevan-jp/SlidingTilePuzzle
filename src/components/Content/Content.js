import React from 'react';
import styled from 'styled-components';

import LeftContainer from '../LeftContainer';
import ButtonBoard from '../ButtonBoard';
import MovesContainer from '../MovesContainer';

const Content = (props) => {
  return (
    <ContentContainer>
      <QuarterWidth>
        <LeftContainer />
      </QuarterWidth>
      <HalfWidth>
        <ButtonBoard />
      </HalfWidth>
      <QuarterWidth>
        <MovesContainer />
      </QuarterWidth>
    </ContentContainer>
  )
}

export default Content;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  height: 95vh;
  background-color: #00e7ff;
`;

const QuarterWidth = styled.div`
  width: 25%;
  height: 100%;
`;

const HalfWidth = styled.div`
  width: 50%;
  height: 100%;
`;