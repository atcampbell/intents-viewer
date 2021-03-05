import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  border-radius: 5px;
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.red};
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 8px;
  transition: all 150ms;
  border: 2px solid;
  background: ${(props) => (props.checked ? props.theme.colors.red : 'white')};

  :hover {
    cursor: pointer;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ checked, onChange, ...props }: CheckboxProps) {
  return (
    <label>
      <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} onChange={onChange} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </label>
  );
}
