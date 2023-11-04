import styled from 'styled-components';
import Container from '@components/Container';

export const LoaderContainer = styled(Container)`
  margin: 0;
  justify-content: center;
`;

export const FilterButtonsContainer = styled.div`
  width: 248px;
  margin: 25px 20px 25px 0;
  display: flex;
  justify-content: space-around;
`;

export const MobileFilterContainer = styled.div`
  margin: 25px 15px 25px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${(props) => props.theme.tokens.MIN_WIDTH_TABLET} {
    display: none;
  }
`;
