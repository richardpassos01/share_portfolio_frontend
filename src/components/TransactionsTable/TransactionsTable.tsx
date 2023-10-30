import React, { useState } from 'react';
import { Card, Table } from '@designSystem';
import { Container } from './TransactionsTable.stytes';
import useSWR from 'swr';
import bff from '@bff';
import FetcherKeys from '@constants/FetcherKeys';

const TransactionsTable: React.FC = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');

  const { data, error, isValidating } = useSWR(
    [FetcherKeys.LIST_TRANSACTIONS, currentPage, sortOrder],
    () => fetchData(currentPage, sortOrder),
  );

  async function fetchData(page: number, sortOrder: string) {
    return bff.listTransactions(
      'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2',
      page,
      itemsPerPage,
      sortOrder,
    );
  }

  const handleDateSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (error) return <div>Failed to load</div>;
  if (isValidating) return <div>Loading...</div>;
  if (!data?.transactions || data.transactions.length === 0)
    return <div>Empty</div>;

  const visiblePages = Math.min(10, data.totalPages);
  const firstPage = Math.max(1, currentPage - 2);
  const lastPage = Math.min(data.totalPages, firstPage + visiblePages - 1);

  const pages = Array.from(
    { length: visiblePages },
    (_, index) => firstPage + index,
  );

  return (
    <Container>
      <Card $width="auto">
        <Table.Container>
          <Table.Header>
            <Table.Row>
              <Table.StickyTableColumnHeader>
                Tipo
              </Table.StickyTableColumnHeader>
              <Table.StickyTableHeader
                onClick={() => handleDateSort()}
                style={{ cursor: 'pointer' }}
              >
                {sortOrder === 'asc' ? '↑' : '↓'} Data
              </Table.StickyTableHeader>
              <Table.StickyTableHeader>Movimentação</Table.StickyTableHeader>
              <Table.StickyTableHeader>Produto</Table.StickyTableHeader>
              <Table.StickyTableHeader>Quantidade</Table.StickyTableHeader>
              <Table.StickyTableHeader>Preço unitário</Table.StickyTableHeader>
              <Table.StickyTableHeader>
                Valor da operação
              </Table.StickyTableHeader>
            </Table.Row>
          </Table.Header>
          <tbody>
            {data?.transactions.map((item, index) => (
              <Table.Row key={index}>
                <Table.StickyTableCell>{item.type}</Table.StickyTableCell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.ticketSymbol}</Table.Cell>
                <Table.Cell>{item.quantity}</Table.Cell>
                <Table.Cell>{item.unitPrice}</Table.Cell>
                <Table.Cell>{item.totalCost}</Table.Cell>
              </Table.Row>
            ))}
          </tbody>
        </Table.Container>
        <Table.Pagination>
          <Table.PageButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </Table.PageButton>
          {pages.map((page) => (
            <Table.PageButton
              key={page}
              active={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Table.PageButton>
          ))}
          <Table.PageButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === data.totalPages}
          >
            Próxima
          </Table.PageButton>
        </Table.Pagination>
      </Card>
    </Container>
  );
};

export default TransactionsTable;
