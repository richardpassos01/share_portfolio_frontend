import React from 'react';
import { Table, Skeleton } from '@designSystem';

const Loading: React.FC = () => {
  return (
    <Table.Container>
      <Table.Wrapper>
        <Table.Header>
          <Table.Row>
            <Table.HeaderFixedCell>Tipo</Table.HeaderFixedCell>
            <Table.HeaderCell>Data</Table.HeaderCell>
            <Table.HeaderCell>Movimentação</Table.HeaderCell>
            <Table.HeaderCell>Produto</Table.HeaderCell>
            <Table.HeaderCell>Quantidade</Table.HeaderCell>
            <Table.HeaderCell>Preço unitário</Table.HeaderCell>
            <Table.HeaderCell>Valor da operação</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {[...Array(10)].map((_, index) => (
            <Table.Row key={index}>
              {[...Array(7)].map((__, idx) => (
                <Table.Cell key={idx}>
                  <Skeleton $width={80} $height={20} />
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Wrapper>
    </Table.Container>
  );
};

export default Loading;
