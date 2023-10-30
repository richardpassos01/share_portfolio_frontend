import React, { useState } from 'react';
import { Table } from '@designSystem';
import { Container, TransactionCard } from './TransactionsTable.stytes';
import bff from '@bff';
import FetcherKeys from '@constants/FetcherKeys';
import useInfiniteFetch from '@hooks/useInfiniteFetch';

const PAGE_LIMIT = 100;

const TransactionsTable: React.FC = () => {
  const screenWidth = window.screen.width;
  const [sortOrder, setSortOrder] = useState('asc');

  function fetcher(page: number, sortOrder: string) {
    return bff.listTransactions(
      'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2',
      page,
      PAGE_LIMIT,
      sortOrder,
    );
  }

  const {
    data: newData,
    isLoading,
    lastDataRendered,
    fetchedAll,
  } = useInfiniteFetch(fetcher, FetcherKeys.LIST_TRANSACTIONS, sortOrder);

  const handleDateSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <TransactionCard $width={screenWidth}>
        <h1>Transactions</h1>
        <Table.Container>
          <Table.Wrapper>
            <Table.Header>
              <Table.Row>
                <Table.HeaderFixedCell>Tipo</Table.HeaderFixedCell>
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
            <Table.Body>
              {newData.map((item, index) => (
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
              <div ref={lastDataRendered}>{!fetchedAll && 'loading'}</div>
            </Table.Body>
          </Table.Wrapper>
        </Table.Container>
      </TransactionCard>
    </Container>
  );
};

export default TransactionsTable;
