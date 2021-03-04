import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Intent from './Intent';
import intents from '../assets/intents.json';
import Notification from './Notification';

// grid-template-rows: auto 1fr;
const StyledDiv = styled.div`
  background: white;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  gap: 20px;
  background: ${(props) => props.theme.colors.lightBlue};
`;

const Container = styled.div`
  display: grid;
`;

// USE TYPESCRIPT
// or maybe call this layout?
export default function Layout() {
  const [notificationVisible, setNotificationVisible] = useState(false);

  return (
    <Container>
      <Header />
      <StyledDiv>
        {intents.map((intent) => (
          <Intent intent={intent} key={intent.id} setNotificationVisible={setNotificationVisible} />
        ))}
      </StyledDiv>
      <Notification
        notificationVisible={notificationVisible}
        setNotificationVisible={setNotificationVisible}
      />
    </Container>
  );
}
