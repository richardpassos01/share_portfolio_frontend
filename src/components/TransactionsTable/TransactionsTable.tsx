import React, { useState, useRef, useMemo } from 'react';
import { Card, Table } from '@designSystem';
import { Container } from './TransactionsTable.stytes';
import useSWRInfinite from 'swr/infinite';
import bff from '@bff';
import FetcherKeys from '@constants/FetcherKeys';
import useInfiniteScroll from '@hooks/useInfiniteScroll';

const PAGE_LIMIT = 10;

const TransactionsTable: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const observer = useRef(null);

  const [sortOrder, setSortOrder] = useState('asc');

  const { data, setSize, size } = useSWRInfinite(
    (index) => [FetcherKeys.LIST_TRANSACTIONS, index + 1, sortOrder],
    (key) => fetcher(key[1], sortOrder),
  );

  const newData = useMemo(() => {
    setLoading(false);
    if (data) {
      const concatenatedData = data.flatMap((page) => page.transactions);
      return concatenatedData;
    }
    return [];
  }, [data]);

  const isEnd = newData.length < PAGE_LIMIT;

  const { lastDataRendered } = useInfiniteScroll(
    setLoading,
    setSize,
    observer,
    size,
    loading,
    isEnd,
  );

  function fetcher(page: number, sortOrder: string) {
    return bff.listTransactions(
      'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2',
      page,
      PAGE_LIMIT,
      sortOrder,
    );
  }

  const handleDateSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (!newData.length) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Card $width="auto">
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
              <div ref={lastDataRendered}>loading</div>
            </Table.Body>
          </Table.Wrapper>
        </Table.Container>
      </Card>
    </Container>
  );
};

export default TransactionsTable;
