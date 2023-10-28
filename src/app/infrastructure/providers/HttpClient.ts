export default class HttpClient {
  private headers = { 'Content-Type': 'application/json' };

  constructor(private readonly baseURL: string) {}

  private async request(endpoint: string, method: string, data?: any) {
    const requestConfig = {
      method,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: this.headers,
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    } as RequestInit;

    if (data) {
      requestConfig.body = JSON.stringify(data);
    }

    const response = await fetch(`${this.baseURL}${endpoint}`, requestConfig);
    return response.json();
  }

  async get(endpoint: string) {
    return this.request(endpoint, 'GET');
  }

  async post(endpoint: string, data = {}) {
    return this.request(endpoint, 'POST', data);
  }

  async put(endpoint: string, data = {}) {
    return this.request(endpoint, 'PUT', data);
  }

  async patch(endpoint: string, data = {}) {
    return this.request(endpoint, 'PATCH', data);
  }

  async delete(endpoint: string) {
    return this.request(endpoint, 'DELETE');
  }
}
