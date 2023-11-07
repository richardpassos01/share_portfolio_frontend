import {
  MonthlyBalance,
  SharePortfolioAdapter,
  TotalBalance,
} from '@adapters/sharePortfolio';
import {
  calculateBalanceNetEarning,
  formatterMoney,
  getCurrentYearMonth,
} from '@helpers';
import Balance from '../../../entities/Balance';

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
      totalNetEarning: formatterMoney(totalBalance.netEarning),
      totalLoss: formatterMoney(totalBalance.loss),
      currentNetEarning: formatterMoney(currentNetEarning),
      previousMonthBalance,
    };
  }

  private static calculateResult(monthlyBalances: MonthlyBalance[]) {
    let currentNetEarning = 0;
    let previousMonthBalance: any = {};

    const currentYearMonth = getCurrentYearMonth();

    if (monthlyBalances.length > 0) {
      const currentMonth = monthlyBalances[0];
      const previousMonth =
        monthlyBalances.length > 1 ? monthlyBalances[1] : monthlyBalances[0];

      if (currentMonth.yearMonth === currentYearMonth) {
        currentNetEarning = calculateBalanceNetEarning(currentMonth);
      }

      if (previousMonth) {
        previousMonthBalance = new Balance(
          previousMonth.yearMonth,
          previousMonth.loss,
          previousMonth.taxWithholding,
          previousMonth.tax,
          previousMonth.tradeEarning,
          previousMonth.dividendEarning,
        );
      }
    }

    return {
      currentNetEarning,
      previousMonthBalance,
    };
  }
}
