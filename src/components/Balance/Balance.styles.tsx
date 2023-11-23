import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 60%;
  height: 100%;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    width: 80%;
  }
`;

export const Item = styled.div<{ $border?: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: ${(props) =>
    props.$border ? `1px solid ${props.theme.colors.gray}` : 'none'};
  width: 100%;
  justify-content: space-between;
`;

export const Description = styled.h1`
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.darkGray};

  span {
    font-weight: 400;
  }
`;

export const ItemDescription = styled(Description)`
  font-size: 15px;
`;

export const ItemMoney = styled(Description)`
  font-size: 13px;
  font-weight: 400;
  margin-left: 10px;
`;

export const ReasonContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
