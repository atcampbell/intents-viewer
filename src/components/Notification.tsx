import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

const StyledDiv = styled(animated.div)`
  border: 2px solid;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.midBlue};
  width: 100px;
  display: grid;
  justifycontent: center;
  color: white;
  padding: 20px;
  margin: 20px;
  background: ${(props) => props.theme.colors.dark};
  box-shadow: 3px 3px 5px 1px #ccc;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

interface NotificationProps {
  notificationVisible: boolean;
  setNotificationVisible: (visible: boolean) => void;
}

export default function Notification({
  notificationVisible = false,
  setNotificationVisible,
}: NotificationProps) {
  useEffect(() => {
    if (notificationVisible) {
      let timer = setTimeout(() => setNotificationVisible(false), 2000);

      return () => clearTimeout(timer);
    }
  }, [notificationVisible, setNotificationVisible]);

  const transitions = useTransition(notificationVisible, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <StyledDiv key={key} style={props}>
              Intent Added!
            </StyledDiv>
          )
      )}
    </>
  );
}
