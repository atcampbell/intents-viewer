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
`;

// const TextContainer = styled.div`
//   text-align: center;
//   border-radius: 10px;
//   display: grid;
//   padding: 20px;

//   background: ${(props) => props.theme.colors.darkBlue};
// `;

export default function StyledHeader() {
  return (
    <Container>
      <h1>Intent Picker</h1>
      <span>Select intents from the list below to add them to the list.</span>
      <span>Further expressions can be seen by clicking the show all expressions button.</span>
    </Container>
  );
}
