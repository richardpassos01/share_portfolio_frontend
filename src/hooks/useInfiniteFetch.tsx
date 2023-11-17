import { useState, useRef, useMemo, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import BffEndpoints from '@constants/BffEndpoints';
import fetchBff from '@utils/fetchBff';

const useInfiniteFetch = (
  bffEndpoint: BffEndpoints,
  key: string,
  ...queryParams: any
) => {
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const observer = useRef(null);

  const { data, mutate, setSize, size, isLoading } = useSWRInfinite(
    (index) => [key, ...queryParams, index + 1],
    async (key) => {
      const page = key[key.length - 1];

      const endpoint = bffEndpoint.replace(':page', page) as BffEndpoints;

      return fetchBff(endpoint, 'GET');
    },
    {
      initialSize: 1,
      revalidateFirstPage: false,
    },
  );

  const newData: Record<string, string>[] = useMemo(() => {
    setLoading(false);

    if (data) {
      const items = data.flatMap(({ items }) => items);
      setTotalItems(data[data.length - 1].totalItems);
      return items;
    }

    return [];
  }, [data]);

  const { lastDataRendered, fetchedAll } = useInfiniteScroll(
    setLoading,
    setSize,
    observer,
    size,
    loading,
    totalItems,
    newData,
  );

  return {
    data: newData,
    refetch: mutate,
    isLoading,
    lastDataRendered,
    fetchedAll,
  };
};

export default useInfiniteFetch;
