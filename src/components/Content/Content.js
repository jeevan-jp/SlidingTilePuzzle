import React from 'react';
import styled from 'styled-components';

import ButtonBoard from '../ButtonBoard';
import MovesContainer from '../MovesContainer';

const Content = (props) => {
  return (
    <ContentContainer>
      <LeftPart>
        <ButtonBoard />
      </LeftPart>
      <RightPart>
        <MovesContainer />
      </RightPart>
    </ContentContainer>
  );
}

export default Content;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  height: 92vh;
  background-color: #00e7ff;
`;

const LeftPart = styled.div`
  width: 75%;
  height: 100%;
`;

const RightPart = styled.div`
  width: 25%;
  height: 100%;
`;