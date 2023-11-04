import React, { useEffect, useState } from 'react';
import {
  SelectBox,
  Colors,
  Filter,
  Hide,
  Tokens,
  Loader,
  HyperLink,
} from '@designSystem';
import {
  FilterButtonsContainer,
  MobileFilterContainer,
  LoaderContainer,
} from './List.stytes';
import FetcherKeys from '@constants/FetcherKeys';
import useInfiniteFetch from '@hooks/useInfiniteFetch';
import BffEndpoints from '@constants/BffEndpoints';
import Loading from './Loading';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import {
  FooterContainer,
  Header,
  TransactionCard,
} from '../Transactions.styles';
import Table from '../Table/Table';
import Container from '@components/Container';

const availableFilters = {
  tickers: ['ABV', 'TSLA'],
  monthYear: ['01/2022'],
};

const institutionId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

const List: React.FC = () => {
  const router = useRouter();
  const [sortOrder, setSortOrder] = useState('asc');
  const [monthYearFilter, setMonthYearFilter] = useState<string[]>([]);
  const [tickerFilter, setTickerFilter] = useState<string[]>([]);

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

  const handleRedirect = () => {
    router.push(Routes.ADD_TRANSACTIONS);
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
            <HyperLink
              $color={Colors.blue}
              $fontSize="14"
              $width="180px"
              onClick={handleRedirect}
            >
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
        <Table data={newData} sortOrder={sortOrder} setSortOrder={setSortOrder}>
          {!fetchedAll && (
            <LoaderContainer ref={lastDataRendered}>
              <Loader $size={30} />
            </LoaderContainer>
          )}
        </Table>
        <FooterContainer>
          <HyperLink
            $color={Colors.blue}
            $fontSize="14"
            $width="180px"
            onClick={handleRedirect}
          >
            Add transactions
          </HyperLink>
        </FooterContainer>
      </TransactionCard>
    </Container>
  );
};

export default List;
