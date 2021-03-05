import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import IntentView from './IntentView';
import data from '../assets/data.json';
import IntentList from './IntentList';
import { Intent } from '../types/Intent';

const Container = styled.div`
  display: grid;
  grid-template-colums: 1fr;
  grid-template-rows: auto 1fr;
  background: ${(props) => props.theme.colors.lightGrey};
`;

const StyledDiv = styled.div`
  background: white;
  display: grid;
  justify-content: center;
  gap: 20px;
  overflow-y: scroll;
  min-height: auto;
  background: ${(props) => props.theme.colors.lightGrey};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const IntentsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  height: 100%;
`;

export default function Layout() {
  const [intents, setIntents] = useState<Intent[]>(data);
  const [allSelected, setAllSelected] = useState<boolean>(false);

  useEffect(() => {
    setIntents((intents) => intents.map((intent) => ({ ...intent, selected: allSelected })));
  }, [allSelected, setIntents]);

  const handleIntentSelect = (selected: Intent) =>
    setIntents((intents) =>
      intents.map((intent) =>
        intent.id === selected.id ? { ...intent, selected: !intent.selected } : intent
      )
    );

  const handleSelectAll = () => setAllSelected((allSelected) => !allSelected);

  return (
    <Container>
      <Header />
      <IntentsContainer>
        <StyledDiv>
          {intents.map((intent) => (
            <IntentView intent={intent} key={intent.id} handleIntentSelect={handleIntentSelect} />
          ))}
        </StyledDiv>
        <IntentList
          intents={intents.filter((intent) => intent.selected)}
          handleSelectAll={handleSelectAll}
          allSelected={allSelected}
        />
      </IntentsContainer>
    </Container>
  );
}
