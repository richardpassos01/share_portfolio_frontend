import { HttpClient } from '../../providers';
import SharePortfolio from '../sharePortfolio/SharePortfolio';
import Endpoints from './Endpoints';

export default class Bff {
  private static instance: HttpClient;
  private static baseURL: string = process.env.NEXT_PUBLIC_BFF_API ?? '';

  private static getInstance(): HttpClient {
    if (!Bff.instance) {
      Bff.instance = new HttpClient(this.baseURL);
    }

    return Bff.instance;
  }

  public static signup(data: Record<string, string>) {
    return Bff.getInstance().post(Endpoints.SIGNUP, data);
  }

  public static listTransactions(
    institutionId: string,
    page: number,
    limit = 100,
  ) {
    return SharePortfolio.listTransactions(institutionId, page, limit);
  }
}
