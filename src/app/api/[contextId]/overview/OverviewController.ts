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

    if (!totalBalance) return null;

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
      const previousMonth = this.getPreviousMonthBalance(
        monthlyBalances,
        currentYearMonth,
      );

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
          previousMonth.type,
          previousMonth.taxGross,
          previousMonth.totalSold,
          previousMonth.restitution,
          previousMonth.currentTotalLoss,
        );
      }
    }

    return {
      currentNetEarning,
      previousMonthBalance,
    };
  }

  private static getPreviousMonthBalance(
    monthlyBalances: MonthlyBalance[],
    currentYearMonth: string,
  ): MonthlyBalance {
    if (monthlyBalances.length > 1) {
      return monthlyBalances[0].yearMonth === currentYearMonth
        ? monthlyBalances[1]
        : monthlyBalances[0];
    }

    return monthlyBalances[0];
  }
}
