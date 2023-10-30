import { MutableRefObject, useCallback } from 'react';

const useInfiniteScroll = (
  setLoading: (loading: boolean) => void,
  setSize: (size: number) => void,
  observer: MutableRefObject<IntersectionObserver | null>,
  size: number,
  loading: boolean,
  isEnd: boolean,
) => {
  const fetchData = useCallback(() => {
    setLoading(true);
    setSize(size + 1);
  }, [setLoading, setSize, size]);

  const lastDataRendered = useCallback(
    (node: HTMLElement | null) => {
      if (loading || isEnd) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, isEnd, fetchData, observer],
  );

  return { lastDataRendered };
};

export default useInfiniteScroll;
