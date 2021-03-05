import styled from 'styled-components';

interface TextProps {
  bold: boolean;
}

const Text = styled.span<TextProps>`
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.textPrimary};
`;

export default Text;
