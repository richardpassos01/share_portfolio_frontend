import { HttpClient } from '../../providers';
import Endpoints from './Endpoints';
import { Institution, Pagination, Portfolio, Transaction } from './types';

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

  public static createInstituion(body: Record<string, string>): Promise<void> {
    return SharePortfolio.getInstance().post(
      Endpoints.CREATE_INSTITUTION,
      body,
    );
  }

  public static getInstituion(institutionId: string): Promise<Institution> {
    return SharePortfolio.getInstance().get(
      Endpoints.GET_INSTITUTION.replace(':institutionId', institutionId),
    );
  }

  public static getPortfolio(institutionId: string): Promise<Portfolio> {
    return SharePortfolio.getInstance().get(
      Endpoints.GET_PORTFOLIO.replace(':institutionId', institutionId),
    );
  }

  public static resyncPortfolio(institutionId: string): Promise<void> {
    return SharePortfolio.getInstance().post(
      Endpoints.RESYNC_PORTFOLIO.replace(':institutionId', institutionId),
    );
  }

  public static listTransactions(
    institutionId: string,
    page: string,
    limit: string,
    order: string,
  ): Promise<Pagination<Transaction>> {
    return SharePortfolio.getInstance().get(
      Endpoints.LIST_TRANSACTIONS.replace(':institutionId', institutionId)
        .replace(':page', page)
        .replace(':limit', limit)
        .replace(':order', order),
    );
  }

  public static createTransactions(
    institutionId: string,
    transactions: Transaction[],
  ): Promise<void> {
    return SharePortfolio.getInstance().post(
      Endpoints.CREATE_TRANSACTIONS.replace(':institutionId', institutionId),
      transactions,
    );
  }

  public static deleteTransactions(institutionId: string): Promise<void> {
    return SharePortfolio.getInstance().delete(
      Endpoints.DELETE_TRANSACTIONS.replace(':institutionId', institutionId),
    );
  }
}
