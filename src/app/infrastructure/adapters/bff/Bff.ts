import { HttpClient } from '../../providers';
import Endpoints from './Endpoints';

export default class Bff {
  private static instance: HttpClient;
  private static baseURL: string =
    process.env.BFF_API ?? 'http://localhost:3000';

  private static getInstance(): HttpClient {
    if (!Bff.instance) {
      Bff.instance = new HttpClient(this.baseURL);
    }

    return Bff.instance;
  }

  public static signup(data: Record<string, string>) {
    return Bff.getInstance().post(Endpoints.SIGNUP, data);
  }
}
