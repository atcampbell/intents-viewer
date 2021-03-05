import styled from 'styled-components';

interface ButtonProps {
  justify?: string;
  primary?: boolean;
  onClick: () => void;
}

const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  margin-top: 1rem;
  width: 11rem;
  background: transparent;
  border: 2px solid;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.red};
  font-size: 1rem;
  justify-self: ${(props) => props.justify};
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  ${(props) =>
    props.primary &&
    `
        background: ${props.theme.colors.red};
        color: white;
      `}
`;

export default Button;
