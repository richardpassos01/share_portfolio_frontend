import useSWR from 'swr';
import BffEndpoints from '@constants/BffEndpoints';
import fetchBff from '@utils/fetchBff';

const useFetch = (bffEndpoint: BffEndpoints, key: string) => {
  const { data, error, isLoading } = useSWR(key, () =>
    fetchBff(bffEndpoint, 'GET'),
  );

  return { data, error, isLoading };
};

export default useFetch;
