import styled from 'styled-components';

export const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Header = styled.thead``;

export const HeaderCell = styled.th`
  padding: 20px 0 20px 40px;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.darkGray};
  text-align: left;
  vertical-align: middle;
`;

export const SortIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const Row = styled.tr``;

export const Cell = styled.td`
  padding: 20px 0 20px 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightGray};
  text-align: left;
  vertical-align: middle;
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
