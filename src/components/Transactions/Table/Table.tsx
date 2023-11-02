import React from 'react';
import { Table, Loader, Colors } from '@designSystem';

type Props = {
  data: any[];
  sortOrder: string;
  setSortOrder: any;
  children?: React.ReactNode;
};

export default function TransactionsTable({
  data,
  sortOrder,
  setSortOrder,
  children,
}: Props) {
  const typeColors = {
    Compra: Colors.green,
    Venda: Colors.pink,
  };

  const handleDateSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Table.Container>
      <Table.Wrapper>
        <Table.Header>
          <Table.Row>
            <Table.HeaderFixedCell>Tipo</Table.HeaderFixedCell>
            <Table.HeaderCell onClick={() => handleDateSort()} $clickable>
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
          {data.map((item, index) => (
            <Table.Row key={index}>
              <Table.StickyTableCell>
                <Table.BackgroundColor
                  $backgroundColor={typeColors[item.type as 'Compra' | 'Venda']}
                >
                  {item.type}
                </Table.BackgroundColor>
              </Table.StickyTableCell>
              <Table.Cell>{item.date}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>{item.ticketSymbol}</Table.Cell>
              <Table.Cell>{item.quantity}</Table.Cell>
              <Table.Cell>{item.unitPrice}</Table.Cell>
              <Table.Cell>{item.totalCost}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Wrapper>
      {children}
    </Table.Container>
  );
}
