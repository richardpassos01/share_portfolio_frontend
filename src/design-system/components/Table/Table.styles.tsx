import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  height: 100%;

  @media (max-width: 767px) {
    overflow: scroll;
  }
`;

export const Wrapper = styled.table`
  width: 100%;
`;

export const Header = styled.thead`
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Body = styled.tbody``;

export const HeaderCell = styled.th`
  padding: 18px 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.darkGray};
  text-align: left;
  vertical-align: middle;
`;

export const HeaderFixedCell = styled(HeaderCell)`
  @media (max-width: 767px) {
    position: sticky;
    left: 0;
    background: #fff;
  }
`;

export const SortIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const Row = styled.tr``;

export const Cell = styled.td`
  padding: 18px 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightGray};
  text-align: left;
  vertical-align: middle;
`;

export const StickyTableCell = styled(Cell)`
  @media (max-width: 767px) {
    position: sticky;
    left: 0;
    background: #fff;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const PageButton = styled.button<{ active?: any }>`
  margin: 0 5px;
  background-color: ${(props) => (props.active ? 'gray' : 'transparent')};
`;
