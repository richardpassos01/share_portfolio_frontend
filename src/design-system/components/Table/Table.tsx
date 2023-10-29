import React, { useState } from 'react';
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
  position: relative;
`;

const SortIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PageButton = styled.button<{ active?: any }>`
  margin: 0 5px;
  background-color: ${(props) => (props.active ? 'gray' : 'transparent')};
`;

type Props = {
  data: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    transactions: any[];
  };
};

const Table: React.FC<Props> = ({ data }) => {
  const { currentPage, totalPages, transactions } = data;
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState({ ticketSymbol: '', dateMonth: '' });

  const handleDataSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredResults = transactions.filter((item) => {
    return (
      (!filter.ticketSymbol || item.ticketSymbol === filter.ticketSymbol) &&
      (!filter.dateMonth || item.dateMonth === filter.dateMonth)
    );
  });

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const displayedResults = filteredResults.slice(startIndex, endIndex);

  const renderSortIcon = (column: string) => {
    if (sortBy === column) {
      return sortOrder === 'asc' ? '↑' : '↓';
    }
    return '';
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      // Implemente a lógica para lidar com a mudança de página
    }
  };

  return (
    <div>
      <div>
        <label>Ação: </label>
        <select name="ticketSymbol" onChange={handleFilterChange}>
          <option value="">All</option>
        </select>
        <label>Ano: </label>
        <select name="dateMonth" onChange={handleFilterChange}>
          <option value="">All</option>
        </select>
      </div>
      <TableWrapper>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Tipo</TableHeaderCell>
            <TableHeaderCell
              onClick={() => handleDataSort()}
              style={{ cursor: 'pointer' }}
            >
              {sortOrder === 'asc' ? '↑' : '↓'} Data
            </TableHeaderCell>
            <TableHeaderCell>Movimentação</TableHeaderCell>
            <TableHeaderCell>Produto</TableHeaderCell>
            <TableHeaderCell>Quantidade</TableHeaderCell>
            <TableHeaderCell>Preço unitário</TableHeaderCell>
            <TableHeaderCell>Valor da operação</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {displayedResults.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.ticketSymbol}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.unitPrice}</TableCell>
              <TableCell>{item.totalCost}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableWrapper>
      <Pagination>
        <PageButton onClick={() => handlePageChange(currentPage - 1)}>
          Anterior
        </PageButton>
        {Array.from(
          { length: totalPages > 10 ? 10 : totalPages },
          (_, index) => (
            <PageButton
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PageButton>
          ),
        )}
        <PageButton onClick={() => handlePageChange(currentPage + 1)}>
          Próxima
        </PageButton>
      </Pagination>
    </div>
  );
};

export default Table;
