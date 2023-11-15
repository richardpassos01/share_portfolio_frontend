import BffEndpoints from '@constants/BffEndpoints';

const fetchBff = async (
  endpoint: BffEndpoints,
  method: string,
  body?: Record<string, string> | Record<string, string>[],
) => {
  const requestConfig: RequestInit = {
    method,
  };

  if (body) {
    requestConfig.body = JSON.stringify(body);
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_BFF_API + endpoint,
    requestConfig,
  );
  return response.json();
};

export default fetchBff;
