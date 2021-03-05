import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Text from './Text';
import Checkbox from './Checkbox';
import { Intent } from '../types/Intent';

const Container = styled.div`
  position: sticky;
  height: 100vh;
  top: 0;
`;

const ListContainer = styled.div`
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.midBlue};
  display: grid;
  width: 300px;
  justifycontent: center;
  color: ${(props) => props.theme.colors.textPrimary};
  padding: 20px;
  background: white;
  box-shadow: 3px 3px 5px 1px #ccc;
`;

const CheckboxContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
`;

interface IntentListProps {
  intents: Intent[];
  handleSelectAll: () => void;
  allSelected: boolean;
}

export default function IntentList({ intents, handleSelectAll, allSelected }: IntentListProps) {
  const transitions = useTransition(intents, (item) => item.id, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 30 },
    leave: { opacity: 0, height: 0 },
  });

  const handleCheckboxClick = () => handleSelectAll();

  return (
    <Container>
      <ListContainer>
        <div style={{ paddingBottom: '20px' }}>
          <Text bold color="darkBlue">
            Selected Intents
          </Text>
        </div>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                {item.name}
              </animated.div>
            )
        )}
        <CheckboxContainer>
          <Checkbox checked={allSelected} onChange={handleCheckboxClick} />
          <div style={{ paddingTop: '14px', paddingLeft: '10px' }}>
            <Text bold color="red">
              Select All
            </Text>
          </div>
        </CheckboxContainer>
      </ListContainer>
    </Container>
  );
}
