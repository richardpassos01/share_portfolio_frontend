import styled from 'styled-components';

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  cursor: pointer;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;
