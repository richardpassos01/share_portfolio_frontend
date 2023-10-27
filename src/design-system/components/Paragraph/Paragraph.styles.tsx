import styled from 'styled-components';

interface Props {
  color?: string;
}

const Paragraph = styled.p<Props>`
  color: ${(props) => props.theme.colors.dark};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
`;

export default Paragraph;
