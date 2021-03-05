import React, { useState } from 'react';
import styled from 'styled-components';
import { Intent } from '../types/Intent';
import Expressions from './Expressions';
import Button from './Button';
import Text from './Text';
import Checkbox from './Checkbox';

const Container = styled.div`
  border-radius: 10px;
  display: grid;
  max-width: 600px;
  justifycontent: center;
  color: ${(props) => props.theme.colors.textPrimary};
  padding: 20px;
  background: white;
  box-shadow: 3px 3px 5px 1px #ccc;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const Heading = styled.div`
  padding-bottom: 10px;
  border-bottom: solid 1px;
  border-color: lightgrey;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px;
`;

const CheckboxContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
`;

interface IntentProps {
  intent: Intent;
  handleIntentSelect: (intent: Intent) => void;
}

export default function IntentView({ intent, handleIntentSelect }: IntentProps) {
  const [expressionsVisible, setExpressionsVisible] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleIntentSelect(intent);
  };

  return (
    <Container>
      <Heading>
        <Text color="darkBlue" bold>
          {intent.name}
          {' - '}
        </Text>
        <span> {intent.description}</span>
      </Heading>

      <div style={{ padding: '10px 0' }}>
        <Text bold color="darkBlue">
          Q:
        </Text>
        <span> {intent.trainingData.expressions[0].text}</span>
      </div>

      <div style={{ paddingBottom: 10 }}>
        <Text bold color="darkBlue">
          A:
        </Text>
        <span> {intent.reply.text}</span>
      </div>

      <Expressions expressions={intent.trainingData.expressions} open={expressionsVisible} />

      <ButtonContainer>
        <CheckboxContainer>
          <Checkbox checked={!!intent.selected} onChange={handleCheckboxChange} />
          <div style={{ paddingTop: '14px', paddingLeft: '10px' }}>
            <Text bold color="red">
              Select
            </Text>
          </div>
        </CheckboxContainer>
        <Button justify="end" onClick={() => setExpressionsVisible(!expressionsVisible)}>
          {expressionsVisible ? 'Hide Expressions' : 'Show Expressions'}
        </Button>
      </ButtonContainer>
    </Container>
  );
}
