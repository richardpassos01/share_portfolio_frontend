import styled from 'styled-components';

interface ContentProps {
  $backgroundColor?: string;
}

export const Content = styled.header<ContentProps>`
  height: 60px;
  border-top: 1px solid ${(props) => props.theme.colors.gray};
  background-color: ${(props) =>
    props.$backgroundColor ?? props.theme.colors.white};
  display: flex;
  padding: 0 10% 0 12%;
  align-items: center;
  justify-content: flex-start;
`;

export const NavHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const NavHeaderItem = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Underline = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  height: 2px;
  width: 100%;
`;
