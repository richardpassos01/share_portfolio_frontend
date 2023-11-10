import { MutableRefObject, useCallback } from 'react';

const useInfiniteScroll = (
  setLoading: (loading: boolean) => void,
  setSize: (size: number) => void,
  observer: MutableRefObject<IntersectionObserver | null>,
  size: number,
  loading: boolean,
  totalItems: number,
  newData: Record<string, string>[],
) => {
  const fetchedAll = totalItems === newData.length;

  const fetchData = useCallback(() => {
    setLoading(true);
    setSize(size + 1);
  }, [setLoading, setSize, size]);

  const lastDataRendered = useCallback(
    (node: HTMLElement | null) => {
      if (loading || fetchedAll) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, fetchedAll, fetchData, observer],
  );

  return { lastDataRendered, fetchedAll };
};

export default useInfiniteScroll;
