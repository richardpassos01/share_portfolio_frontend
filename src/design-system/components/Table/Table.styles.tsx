import styled from 'styled-components';
import { OverflowContainer } from '../Containers/Containers.style';

export const Container = styled(OverflowContainer)`
  align-items: baseline;
`;

export const Wrapper = styled.table`
  width: 100%;
`;

export const Header = styled.thead`
  background-color: ${(props) => props.theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Body = styled.tbody`
  width: 100%;
`;

export const HeaderCell = styled.th<{ $clickable?: boolean }>`
  padding: 18px 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.darkGray};
  text-align: left;
  vertical-align: middle;
  cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
`;

export const HeaderFixedCell = styled(HeaderCell)`
  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    position: sticky;
    left: 0;
    background: ${(props) => props.theme.colors.white};
  }
`;

export const SortIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const Row = styled.tr``;

export const BackgroundColor = styled.td<{ $backgroundColor?: string }>`
  background: ${(props) => props.$backgroundColor};
  border-radius: 16px;
  padding: 2px 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.darkGray};
`;

export const Cell = styled.td`
  padding: 10px 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  font-size: 14px;
  color: ${(props) => props.theme.colors.softGray};
  text-align: left;
  vertical-align: middle;
`;

export const StickyTableCell = styled(Cell)`
  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    position: sticky;
    left: 0;
    background: ${(props) => props.theme.colors.white};
  }
`;
