import { SharePortfolioAdapter } from '@adapters/sharePortfolio';
import Balance from '../../../entities/Balance';

export default class MonthlyBalanceController {
  public static async list(institutionId: string) {
    const balances =
      await SharePortfolioAdapter.listMonthlyBalances(institutionId);

    return balances.map(
      (balance) =>
        new Balance(
          balance.yearMonth,
          balance.loss,
          balance.taxWithholding,
          balance.tax,
          balance.tradeEarning,
          balance.dividendEarning,
        ),
    );
  }
}
