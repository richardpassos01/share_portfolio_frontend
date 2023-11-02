import BffEndpoints from '@constants/BffEndpoints';
import { useState, useEffect } from 'react';

export const fetchBff = async (
  endpoint: BffEndpoints,
  method: string,
  body?: Record<string, string>,
) => {
  const requestConfig: RequestInit = {
    method,
  };

  if (body) {
    requestConfig.body = JSON.stringify(body);
  }

  const response = await fetch(endpoint, requestConfig);
  return response.json();
};

export default function useBff(
  endpoint: BffEndpoints,
  method: string,
  body?: Record<string, string>,
) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchBff(endpoint, method, body);

        setData(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, body]);

  return [data, isLoading];
}
