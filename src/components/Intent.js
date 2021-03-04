import React, { useState } from 'react';
import styled from 'styled-components';
import Expressions from './Expressions';

const StyledDiv = styled.div`
  border: 2px solid;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.midBlue};
  display: grid;
  width: 500px;
  justifycontent: center;
  color: ${(props) => props.theme.colors.textPrimary};
  padding: 20px;
  background: white;
  box-shadow: 3px 3px 5px 1px #ccc;
`;

const Text = styled.span`
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.textPrimary};
`;

const StyledButton = styled.button`
  border-radius: 5px;
  margin-top: 1rem;
  width: 11rem;
  background: transparent;
  border: 2px solid;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.dark};
  font-size: 1rem;
  justify-self: ${(props) => props.justify};
  };
  :hover {
    cursor: pointer;
  }
  ${(props) =>
    props.primary &&
    `
      background: ${props.theme.colors.darkBlue};
      color: white;
    `}
`;

const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function Intent({ intent, setNotificationVisible }) {
  const [expressionsVisible, setExpressionsVisible] = useState(false);
  const [selected, setSelected] = useState(false);

  // get a change to show that this component is selected
  const handleSelectClick = () => {
    if (!selected) {
      setNotificationVisible(true);
    }
    setSelected(!selected);
  };

  return (
    <StyledDiv>
      <div
        style={{
          paddingBottom: '5px',
          borderBottom: ' solid 1px',
          borderColor: 'lightgrey',
        }}
      >
        <Text bold color="darkBlue">
          {intent.name}
        </Text>
        <span> - {intent.description}</span>
      </div>

      <div style={{ padding: '5px 0' }}>
        <Text bold color="midBlue">
          Q:
        </Text>
        <span> {intent.trainingData.expressions[0].text}</span>
      </div>

      <div>
        <Text bold color="midBlue">
          A:
        </Text>
        <span> {intent.reply.text}</span>
      </div>

      <Expressions expressions={intent.trainingData.expressions} open={expressionsVisible} />

      <ButtonDiv>
        <StyledButton primary onClick={() => handleSelectClick()}>
          Select
        </StyledButton>
        <StyledButton justify="end" onClick={() => setExpressionsVisible(!expressionsVisible)}>
          {expressionsVisible ? 'Hide Training Data' : 'View Training Data'}
        </StyledButton>
      </ButtonDiv>
    </StyledDiv>
  );
}
