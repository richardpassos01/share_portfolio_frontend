import React from 'react';
import { Hide, Table, Tokens, Loader, Skeleton } from '@designSystem';
import { FilterButtonsContainer, MobileFilterContainer } from './List.stytes';
import { Container, TransactionCard, Header } from '../Transactions.styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <TransactionCard>
        <Header>
          <Hide on={Tokens.MAX_WIDTH_MOBILE}>
            <FilterButtonsContainer>
              <Skeleton $width={80} $height={30} />
              <Skeleton $width={80} $height={30} />
            </FilterButtonsContainer>
          </Hide>
          <Hide on={Tokens.MIN_WIDTH_MOBILE}>
            <MobileFilterContainer>
              <Skeleton $width={20} $height={20} $circular />
            </MobileFilterContainer>
          </Hide>
        </Header>
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
      </TransactionCard>
    </Container>
  );
};

export default Loading;
