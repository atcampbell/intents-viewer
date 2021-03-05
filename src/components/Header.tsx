import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
  align-items: center;
  justify-items: center;
  background: ${(props) => props.theme.colors.dark};
  padding: 20px;
  padding-bottom: 30px;
  text-shadow: 1px 1px 2px ${(props) => props.theme.colors.darkGrey};
`;

export default function StyledHeader() {
  return (
    <Container>
      <h1>Intent Picker</h1>
      <span>Select and preview pre-trained Intents for your AI bot.</span>
      <span style={{ paddingTop: '10px' }}>
        The 'show expressions' button will show all expressions related to that Intent.
      </span>
    </Container>
  );
}
