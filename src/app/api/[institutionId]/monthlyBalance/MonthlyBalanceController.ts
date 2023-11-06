import { SharePortfolioAdapter } from '@adapters/sharePortfolio';

export default class MonthlyBalanceController {
  public static async list(institutionId: string) {
    return SharePortfolioAdapter.listMonthlyBalances(institutionId);
  }
}
