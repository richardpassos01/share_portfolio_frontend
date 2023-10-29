import styled from 'styled-components';

export const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
`;

export const Header = styled.thead`
  background-color: #f2f2f2;
`;

export const HeaderCell = styled.th`
  padding: 10px;
  position: relative;
`;

export const SortIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Cell = styled.td`
  padding: 10px;
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
