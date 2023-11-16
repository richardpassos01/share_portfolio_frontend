import { createQueryParams } from '@helpers';
import { HttpClient } from '../../providers';
import Endpoints from './Endpoints';
import {
  Institution,
  MonthlyBalance,
  Pagination,
  Share,
  TotalBalance,
  Transaction,
} from './types';

export default class SharePortfolio {
  private static instance: HttpClient;
  private static baseURL: string = process.env
    .NEXT_PUBLIC_SHARE_PORTFOLIO_API as string;
  private static apiKey: string = process.env
    .NEXT_PUBLIC_SHARE_PORTFOLIO_API_KEY as string;

  private static getInstance(): HttpClient {
    if (!SharePortfolio.instance) {
      SharePortfolio.instance = new HttpClient(this.baseURL, this.apiKey);
    }

    return SharePortfolio.instance;
  }

  public static createInstituion(institution: Institution): Promise<void> {
    return SharePortfolio.getInstance().post(
      Endpoints.CREATE_INSTITUTION,
      institution,
    );
  }

  public static listInstitutions(userId: string): Promise<Institution[]> {
    return SharePortfolio.getInstance().get(
      Endpoints.LIST_INSTITUTIONS.replace(':userId', userId),
    );
  }

  public static listShares(institutionId: string): Promise<Share[]> {
    return SharePortfolio.getInstance().get(
      Endpoints.LIST_SHARES.replace(':institutionId', institutionId),
    );
  }

  public static listMonthYears(institutionId: string): Promise<string[]> {
    return SharePortfolio.getInstance().get(
      Endpoints.LIST_MONTH_YEARS.replace(':institutionId', institutionId),
    );
  }

  public static getTotalBalance(institutionId: string): Promise<TotalBalance> {
    return SharePortfolio.getInstance().get(
      Endpoints.GET_TOTAL_BALANCE.replace(':institutionId', institutionId),
    );
  }

  public static listMonthlyBalances(
    institutionId: string,
    limit?: number,
  ): Promise<MonthlyBalance[]> {
    let endpoint = Endpoints.LIST_MONTHLY_BALANCES.replace(
      ':institutionId',
      institutionId,
    );

    if (limit) {
      endpoint = `${endpoint}?limit=${limit}`;
    }

    return SharePortfolio.getInstance().get(endpoint);
  }

  public static resync(institutionId: string): Promise<void> {
    return SharePortfolio.getInstance().post(
      Endpoints.RESYNC.replace(':institutionId', institutionId),
    );
  }

  public static listTransactions(
    institutionId: string,
    page: string,
    limit: string,
    order: string,
    monthYear: string[],
    ticker: string[],
  ): Promise<Pagination<Transaction>> {
    let queryParams = '';

    if (monthYear.length) {
      const params = createQueryParams('monthYear', monthYear);
      queryParams += params;
    }

    if (ticker.length) {
      const params = createQueryParams('ticker', ticker);
      queryParams += params;
    }

    const endpoint = Endpoints.LIST_TRANSACTIONS.replace(
      ':institutionId',
      institutionId,
    )
      .replace(':page', page)
      .replace(':limit', limit)
      .replace(':order', order);

    const endpointWithParams = queryParams
      ? `${endpoint}&${queryParams}`
      : endpoint;

    return SharePortfolio.getInstance().get(endpointWithParams);
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
