import styled from 'styled-components';

export const LoggedOutContainer = styled.div`
  display: flex;
  width: 15.3em;
  justify-content: space-between;
`;

export const LoggedContainer = styled.div<{ $hasInstitutions: boolean }>`
  display: flex;
  width: ${(props) => (props.$hasInstitutions ? '17em' : '10em')};
  justify-content: space-between;
`;
