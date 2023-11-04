import React, { Dispatch, SetStateAction, useState } from 'react';
import { Table, Colors } from '@designSystem';
import { formatterMoney } from '@utils/formatters';

type Props = {
  data: Record<string, string | number>[];
  sortOrder?: string;
  setSortOrder?: Dispatch<SetStateAction<string>>;
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
  const [sortIcon, setSortIcon] = useState(sortOrder ? '↑' : '');

  const handleDateSort = () => {
    if (!sortOrder) return;

    setSortIcon(sortOrder === 'asc' ? '↑' : '↓');

    if (setSortOrder) setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Table.Container>
      <Table.Wrapper>
        <Table.Header>
          <Table.Row>
            <Table.HeaderFixedCell>Tipo</Table.HeaderFixedCell>
            <Table.HeaderCell
              onClick={() => handleDateSort()}
              $clickable={Boolean(sortOrder)}
            >
              {sortIcon} Data
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
              <Table.Cell>
                {formatterMoney(item.unitPrice as number)}
              </Table.Cell>
              <Table.Cell>
                {formatterMoney(item.totalCost as number)}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Wrapper>
      {children}
    </Table.Container>
  );
}
