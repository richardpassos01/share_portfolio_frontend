import { SharePortfolioAdapter } from '@adapters/sharePortfolio';
import { yearMonthFormatter } from '@helpers';

type Filter = {
  tickers: string[];
  monthYears: string[];
};

export default class FiltersController {
  public static async getTransactionTableFilters(
    institutionId: string,
  ): Promise<Filter> {
    const availableFilters: Filter = {
      tickers: [],
      monthYears: [],
    };

    const ticketSymbols =
      await SharePortfolioAdapter.listTransactionsTicketSymbols(institutionId);
    const monthYears =
      await SharePortfolioAdapter.listMonthYears(institutionId);

    if (ticketSymbols.length) {
      availableFilters.tickers.push(...ticketSymbols);
    }

    if (monthYears.length) {
      const formattedMonthYears = monthYears.map((monthYear) =>
        yearMonthFormatter(monthYear),
      );
      availableFilters.monthYears.push(...formattedMonthYears);
    }

    return availableFilters;
  }
}
