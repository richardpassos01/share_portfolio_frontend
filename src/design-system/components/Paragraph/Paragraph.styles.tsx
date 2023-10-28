import styled from 'styled-components';

interface Props {
  $color?: string;
  $weight?: number;
}

const Paragraph = styled.p<Props>`
  color: ${(props) => props.$color ?? props.theme.colors.dark};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: ${(props) => props.$weight ?? '400'};
  margin: 0;
`;

export default Paragraph;
