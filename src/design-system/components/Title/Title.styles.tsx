import styled from 'styled-components';

interface Props {
  color?: string;
}

const Title = styled.h2<Props>`
  color: ${(props) => props.theme.colors.darkBlue};
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-weight: 500;
`;

export default Title;
