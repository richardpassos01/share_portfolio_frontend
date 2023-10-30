import { HttpClient } from '../../providers';
import Endpoints from './Endpoints';
import { Pagination, Transaction } from './types';

export default class SharePortfolio {
  private static instance: HttpClient;
  private static baseURL: string =
    process.env.NEXT_PUBLIC_SHARE_PORTFOLIO_API ?? '';

  private static getInstance(): HttpClient {
    if (!SharePortfolio.instance) {
      SharePortfolio.instance = new HttpClient(this.baseURL);
    }

    return SharePortfolio.instance;
  }

  public static createInstituion(data: Record<string, string>) {
    return SharePortfolio.getInstance().post(
      Endpoints.CREATE_INSTITUTION,
      data,
    );
  }

  public static getInstituion(institutionId: string) {
    return SharePortfolio.getInstance().get(
      Endpoints.GET_INSTITUTION.replace(':institutionId', institutionId),
    );
  }

  public static getPortfolio(institutionId: string) {
    return SharePortfolio.getInstance().get(
      Endpoints.GET_PORTFOLIO.replace(':institutionId', institutionId),
    );
  }

  public static resyncPortfolio(institutionId: string) {
    return SharePortfolio.getInstance().post(
      Endpoints.RESYNC_PORTFOLIO.replace(':institutionId', institutionId),
    );
  }

  public static listTransactions(
    institutionId: string,
    page: number,
    limit: number,
    order: string,
  ): Promise<Pagination<Transaction>> {
    return SharePortfolio.getInstance().get(
      Endpoints.LIST_TRANSACTIONS.replace(':institutionId', institutionId)
        .replace(':page', String(page))
        .replace(':limit', String(limit))
        .replace(':order', order),
    );
  }

  public static createTransactions(institutionId: string) {
    return SharePortfolio.getInstance().post(
      Endpoints.CREATE_TRANSACTIONS.replace(':institutionId', institutionId),
    );
  }

  public static deleteTransactions(institutionId: string) {
    return SharePortfolio.getInstance().delete(
      Endpoints.DELETE_TRANSACTIONS.replace(':institutionId', institutionId),
    );
  }
}
