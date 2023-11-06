export default class HttpClient {
  private headers = { 'Content-Type': 'application/json' };

  constructor(private readonly baseURL: string) {}

  private async request(
    endpoint: string,
    method: string,
    body?: Record<string, string>,
  ) {
    const requestConfig = {
      method,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: this.headers,
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    } as RequestInit;

    if (body) {
      requestConfig.body = JSON.stringify(body);
    }

    const response = await fetch(`${this.baseURL}${endpoint}`, requestConfig);
    if (response.ok) {
      return response.json();
    } else {
      throw { message: response.statusText, status: response.status };
    }
  }

  async get(endpoint: string) {
    return this.request(endpoint, 'GET');
  }

  async post(endpoint: string, body = {}) {
    return this.request(endpoint, 'POST', body);
  }

  async put(endpoint: string, body = {}) {
    return this.request(endpoint, 'PUT', body);
  }

  async patch(endpoint: string, body = {}) {
    return this.request(endpoint, 'PATCH', body);
  }

  async delete(endpoint: string) {
    return this.request(endpoint, 'DELETE');
  }
}
