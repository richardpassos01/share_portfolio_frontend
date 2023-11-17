import React, { useEffect, useState } from 'react';
import {
  SelectBox,
  Colors,
  Filter,
  Hide,
  Tokens,
  Loader,
  HyperLink,
  Card,
  Containers,
} from '@designSystem';
import {
  FilterButtonsContainer,
  MobileFilterContainer,
  LoaderContainer,
} from './List.stytes';
import FetcherKeys from '@constants/FetcherKeys';
import useInfiniteFetch from '@hooks/useInfiniteFetch';
import BffEndpoints from '@constants/BffEndpoints';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { FooterContainer, TransactionHeader } from '../Transactions.styles';
import Table from '../Table/Table';
import LoadingTable from '../Table/Loading';
import { useInstitution } from '@hooks/useInstitution';
import useFetch from '@hooks/useFetch';

const List: React.FC = () => {
  const router = useRouter();
  const [sortOrder, setSortOrder] = useState('asc');
  const [monthYearFilter, setMonthYearFilter] = useState<string[]>([]);
  const [tickerFilter, setTickerFilter] = useState<string[]>([]);
  const { institution } = useInstitution();

  const { data, refetch, isLoading, lastDataRendered, fetchedAll } =
    useInfiniteFetch(
      BffEndpoints.LIST_TRANSACTIONS.replace(':institutionId', institution.id)
        .replace(':limit', '100')
        .replace(':order', sortOrder)
        .replace(':monthYear', monthYearFilter.toString())
        .replace(':ticker', tickerFilter.toString()) as BffEndpoints,
      FetcherKeys.LIST_TRANSACTIONS,
      sortOrder,
      monthYearFilter,
      tickerFilter,
    );

  const { data: availableFilters, isLoading: isLoadingFilters } = useFetch(
    BffEndpoints.GET_TRANSACTION_TABLE_FILTERS.replace(
      ':institutionId',
      institution.id,
    ) as BffEndpoints,
    FetcherKeys.GET_TRANSACTION_TABLE_FILTERS,
  );

  useEffect(() => {
    setTickerFilter([]);
    setMonthYearFilter([]);
  }, [institution]);

  useEffect(() => {
    refetch();
  }, [refetch, institution]);

  const handleRedirect = () => {
    router.push(Routes.ADD_TRANSACTIONS);
  };

  // if (isLoading || isLoadingFilters) {
  //   return <Loading />;
  // }

  return (
    <Containers.CardContainer>
      <Card>
        <TransactionHeader>
          <Hide on={Tokens.MAX_WIDTH_MOBILE}>
            <FilterButtonsContainer>
              <SelectBox
                label={'Ticker'}
                arrayOfString={availableFilters?.tickers}
                selectedOptions={tickerFilter}
                setSelectedOptions={setTickerFilter}
                $width="100"
              />
              <SelectBox
                label={'Mês'}
                arrayOfString={availableFilters?.monthYears}
                selectedOptions={monthYearFilter}
                setSelectedOptions={setMonthYearFilter}
                $width="85"
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
                items={availableFilters?.tickers}
                filter={tickerFilter}
                setFilter={setTickerFilter}
              />
              <Filter.Item
                label={'Mês'}
                items={availableFilters?.monthYears}
                filter={monthYearFilter}
                setFilter={setMonthYearFilter}
              />
            </Filter.Menu>
          </MobileFilterContainer>
        </TransactionHeader>
        {isLoading || isLoadingFilters ? (
          <LoadingTable />
        ) : (
          <Table data={data} sortOrder={sortOrder} setSortOrder={setSortOrder}>
            {!fetchedAll && (
              <LoaderContainer ref={lastDataRendered}>
                <Loader $size={30} />
              </LoaderContainer>
            )}
          </Table>
        )}
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
      </Card>
    </Containers.CardContainer>
  );
};

export default List;
