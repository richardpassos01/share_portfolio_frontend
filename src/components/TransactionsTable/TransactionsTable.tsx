import React from 'react';
import { Card, Table } from '@designSystem';
import { Container } from './TransactionsTable.stytes';
import useSWR from 'swr';
import bff from '@bff';

const key = 'my-unique-key';

const TransactionsTable: React.FC = () => {
  const { data, error, isLoading } = useSWR(key, () =>
    bff.listTransactions('c1daef5f-4bd0-4616-bb62-794e9b5d8ca2', 1),
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Container>
      <Card $width="80%">
        <Table data={data} />
        {/* {data.results.map((item) => (
          <div key={item.id}>{item.ticketSymbol}</div>
        ))} */}
      </Card>
    </Container>
  );
};

export default TransactionsTable;
