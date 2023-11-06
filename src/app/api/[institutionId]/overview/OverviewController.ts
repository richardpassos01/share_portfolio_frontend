import {
  MonthlyBalance,
  SharePortfolioAdapter,
  TotalBalance,
} from '@adapters/sharePortfolio';

export default class OverviewController {
  public static async get(institutionId: string) {
    const monthlyBalancesLimit = 2;

    const totalBalance =
      await SharePortfolioAdapter.getTotalBalance(institutionId);
    const monthlyBalances = await SharePortfolioAdapter.listMonthlyBalances(
      institutionId,
      monthlyBalancesLimit,
    );

    return this.createOverview(totalBalance, monthlyBalances);
  }

  private static createOverview(
    totalBalance: TotalBalance,
    monthlyBalances: MonthlyBalance[],
  ) {
    const { currentNetEarning, previousMonthBalance } =
      this.calculateResult(monthlyBalances);

    return {
      totalNetEarning: totalBalance.netEarning,
      totalLoss: totalBalance.loss,
      currentNetEarning,
      previousMonthBalance,
    };
  }

  private static calculateResult(monthlyBalances: MonthlyBalance[]) {
    let currentNetEarning = 0;
    let previousMonthBalance: any = {};

    const currentYearMonth = new Date().toISOString().slice(0, 7);

    if (monthlyBalances.length > 0) {
      const currentMonth = monthlyBalances[0];
      const previousMonth =
        monthlyBalances.length > 1 ? monthlyBalances[1] : monthlyBalances[0];

      if (currentMonth.yearMonth === currentYearMonth) {
        currentNetEarning =
          currentMonth.tradeEarning +
          currentMonth.dividendEarning -
          currentMonth.tax -
          currentMonth.taxWithholding -
          currentMonth.loss;
      }

      if (previousMonth) {
        previousMonthBalance = {
          yearMonth: previousMonth.yearMonth.split('/').reverse().join(''),
          netEarning:
            previousMonth.tradeEarning +
            previousMonth.dividendEarning -
            previousMonth.tax -
            previousMonth.taxWithholding -
            previousMonth.loss,
          loss: previousMonth.loss,
          taxWithholding: previousMonth.taxWithholding,
          tax: previousMonth.tax,
          tradeEarning: previousMonth.tradeEarning,
          dividendEarning: previousMonth.dividendEarning,
        };
      }
    }

    return {
      currentNetEarning,
      previousMonthBalance,
    };
  }
}
