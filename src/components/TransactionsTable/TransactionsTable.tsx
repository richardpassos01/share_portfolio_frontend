import React, { useState } from 'react';
import { Card, Table } from '@designSystem';
import { Container } from './TransactionsTable.stytes';
import useSWR from 'swr';
import bff from '@bff';

const key = 'my-unique-key';

const TransactionsTable: React.FC = () => {
  function fetchData(page: number, sortOrder: string) {
    const limitPage = 10;
    return bff.listTransactions(
      'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2',
      page,
      limitPage,
      sortOrder,
    );
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');

  const [filter, setFilter] = useState({ ticketSymbol: '', dateMonth: '' });

  const { data, error, isLoading } = useSWR([key, currentPage, sortOrder], () =>
    fetchData(currentPage, sortOrder),
  );

  const handleDateSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // if (newPage >= 1 && newPage <= data?.totalPages) {
    //   // Implemente a lógica para lidar com a mudança de página
    // }
  };

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data?.transactions) return <div>empty</div>;

  return (
    <Container>
      <Card $width="80%">
        <div>
          {/* <div>
            <label>Ação: </label>
            <select name="ticketSymbol" onChange={handleFilterChange}>
              <option value="">All</option>
            </select>
            <label>Ano: </label>
            <select name="dateMonth" onChange={handleFilterChange}>
              <option value="">All</option>
            </select>
          </div> */}
          <Table.Wrapper>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Tipo</Table.HeaderCell>
                <Table.HeaderCell
                  onClick={() => handleDateSort()}
                  style={{ cursor: 'pointer' }}
                >
                  {sortOrder === 'asc' ? '↑' : '↓'} Data
                </Table.HeaderCell>
                <Table.HeaderCell>Movimentação</Table.HeaderCell>
                <Table.HeaderCell>Produto</Table.HeaderCell>
                <Table.HeaderCell>Quantidade</Table.HeaderCell>
                <Table.HeaderCell>Preço unitário</Table.HeaderCell>
                <Table.HeaderCell>Valor da operação</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <tbody>
              {data?.transactions.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{item.type}</Table.Cell>
                  <Table.Cell>{item.date}</Table.Cell>
                  <Table.Cell>{item.category}</Table.Cell>
                  <Table.Cell>{item.ticketSymbol}</Table.Cell>
                  <Table.Cell>{item.quantity}</Table.Cell>
                  <Table.Cell>{item.unitPrice}</Table.Cell>
                  <Table.Cell>{item.totalCost}</Table.Cell>
                </Table.Row>
              ))}
            </tbody>
          </Table.Wrapper>
          <Table.Pagination>
            <Table.PageButton
              onClick={() => handlePageChange(data.currentPage - 1)}
            >
              Anterior
            </Table.PageButton>
            {Array.from(
              { length: data.totalPages > 10 ? 10 : data.totalPages },
              (_, index) => (
                <Table.PageButton
                  key={index}
                  active={index + 1 === data.currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Table.PageButton>
              ),
            )}
            <Table.PageButton
              onClick={() => handlePageChange(data.currentPage + 1)}
            >
              Próxima
            </Table.PageButton>
          </Table.Pagination>
        </div>
      </Card>
    </Container>
  );
};

export default TransactionsTable;
