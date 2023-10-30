import { useState, useEffect, useRef, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';
import useInfiniteScroll from '@hooks/useInfiniteScroll';

const useInfiniteFetch = (fetcher: Function, key: string, ...sortKeys: any) => {
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const observer = useRef(null);

  const { data, setSize, size, isLoading } = useSWRInfinite(
    (index) => [key, ...sortKeys, index + 1],
    (key) => {
      const page = key[key.length - 1];

      if (sortKeys) {
        return fetcher(page, ...sortKeys);
      }

      return fetcher(page);
    },
  );

  const newData = useMemo(() => {
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
