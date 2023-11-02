import React, { useEffect, useState } from 'react';
import {
  SelectBox,
  Colors,
  Filter,
  Hide,
  Table,
  Tokens,
  Loader,
  HyperLink,
} from '@designSystem';
import {
  Container,
  TransactionCard,
  Header,
  FilterButtonsContainer,
  MobileFilterContainer,
  LoaderContainer,
  AddTransactionsContainer,
} from './TransactionsTable.stytes';
import FetcherKeys from '@constants/FetcherKeys';
import useInfiniteFetch from '@hooks/useInfiniteFetch';
import BffEndpoints from '@constants/BffEndpoints';
import Loading from './Loading';

const availableFilters = {
  tickers: ['ABV', 'TSLA'],
  monthYear: ['01/2022'],
};

const institutionId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

const TransactionsTable: React.FC = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [monthYearFilter, setMonthYearFilter] = useState<string[]>([]);
  const [tickerFilter, setTickerFilter] = useState<string[]>([]);
  const typeColors = {
    Compra: Colors.green,
    Venda: Colors.pink,
  };

  useEffect(() => {
    console.log(monthYearFilter);
    console.log(tickerFilter);
  }, [monthYearFilter, tickerFilter]);

  const {
    data: newData,
    isLoading,
    lastDataRendered,
    fetchedAll,
  } = useInfiniteFetch(
    BffEndpoints.LIST_TRANSACTIONS,
    FetcherKeys.LIST_TRANSACTIONS,
    institutionId,
    sortOrder,
  );

  const handleDateSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <TransactionCard>
        <Header>
          <Hide on={Tokens.MAX_WIDTH_MOBILE}>
            <FilterButtonsContainer>
              <SelectBox
                label={'Ticker'}
                options={availableFilters.tickers}
                selectedOptions={tickerFilter}
                setSelectedOptions={setTickerFilter}
                $width="110"
              />
              <SelectBox
                label={'Mês'}
                options={availableFilters.monthYear}
                selectedOptions={monthYearFilter}
                setSelectedOptions={setMonthYearFilter}
                $width="110"
              ></SelectBox>
            </FilterButtonsContainer>
          </Hide>
          <MobileFilterContainer>
            <HyperLink $color={Colors.blue} $fontSize="14" $width="180px">
              Add transactions
            </HyperLink>
            <Filter.Menu>
              <Filter.Item
                label={'Ticker'}
                items={availableFilters.tickers}
                filter={tickerFilter}
                setFilter={setTickerFilter}
              />
              <Filter.Item
                label={'Mês'}
                items={availableFilters.monthYear}
                filter={monthYearFilter}
                setFilter={setMonthYearFilter}
              />
            </Filter.Menu>
          </MobileFilterContainer>
        </Header>
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
              {newData.map((item, index) => (
                <Table.Row key={index}>
                  <Table.StickyTableCell>
                    <Table.BackgroundColor
                      $backgroundColor={
                        typeColors[item.type as 'Compra' | 'Venda']
                      }
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
          {!fetchedAll && (
            <LoaderContainer ref={lastDataRendered}>
              <Loader $size={30} />
            </LoaderContainer>
          )}
        </Table.Container>
        <AddTransactionsContainer>
          <HyperLink $color={Colors.blue} $fontSize="14" $width="180px">
            Add transactions
          </HyperLink>
        </AddTransactionsContainer>
      </TransactionCard>
    </Container>
  );
};

export default TransactionsTable;
