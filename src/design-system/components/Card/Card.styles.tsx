import styled from 'styled-components';

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  margin: auto;
  border-radius: 10px;
  padding: 0;
  border: 1px solid ${(props) => props.theme.colors.secondary.grey};
`;

export default Card;
