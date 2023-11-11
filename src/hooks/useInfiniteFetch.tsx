import { useState, useRef, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import BffEndpoints from '@constants/BffEndpoints';
import fetchBff from '@utils/fetchBff';

const useInfiniteFetch = (
  bffEndpoint: BffEndpoints,
  key: string,
  parentId: string = '',
  sortOrder: string = 'asc',
  limit: Number = 100,
) => {
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const observer = useRef(null);

  const { data, setSize, size, isLoading } = useSWRInfinite(
    (index) => [key, sortOrder, index + 1],
    async (key) => {
      const page = key[key.length - 1];

      const endpoint = bffEndpoint
        .replace(':institutionId', parentId)
        .replace(':page', String(page))
        .replace(':limit', String(limit))
        .replace(':order', sortOrder) as BffEndpoints;

      return fetchBff(endpoint, 'GET');
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

  return { data: newData, isLoading, lastDataRendered, fetchedAll };
};

export default useInfiniteFetch;
