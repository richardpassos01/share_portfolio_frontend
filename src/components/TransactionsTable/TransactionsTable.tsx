import React, { useEffect, useState } from 'react';
import { SelectBox, Colors, Filter, Hide, Table, Tokens } from '@designSystem';
import {
  Container,
  TransactionCard,
  Header,
  FilterButtonsContainer,
  MobileFilterContainer,
} from './TransactionsTable.stytes';
import FetcherKeys from '@constants/FetcherKeys';
import useInfiniteFetch from '@hooks/useInfiniteFetch';
import BffEndpoints from '@constants/BffEndpoints';

const availableFilters = {
  tickers: ['ABV', 'TSLA'],
  monthYear: ['01/2022'],
};

const institutionId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

const TransactionsTable: React.FC = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [monthYearFilter, setMonthYearFilter] = useState([]);
  const [tickerFilter, setTickerFilter] = useState([]);
  const typeColors = {
    Compra: Colors.green,
    Venda: Colors.pink,
  };

  useEffect(() => {
    console.log(monthYearFilter);
  }, [monthYearFilter]);

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
    return <div>Loading...</div>;
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
          <Hide on={Tokens.MIN_WIDTH_MOBILE}>
            <MobileFilterContainer>
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
          </Hide>
        </Header>
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
                  <Table.StickyTableCell>
                    <Table.BackgroundColor
                      backgroundColor={
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
              <div ref={lastDataRendered}>{!fetchedAll && 'loading'}</div>
            </Table.Body>
          </Table.Wrapper>
        </Table.Container>
      </TransactionCard>
    </Container>
  );
};

export default TransactionsTable;
