import {
  dateStringDDMMYYYYToYYYYMMDD,
  dateStringYYYYMMDDToDDMMYYYY,
} from '@helpers';
import { SharePortfolioAdapter, Transaction } from '@adapters/sharePortfolio';
import {
  categoryMapperToClient,
  typeMapperToClient,
  typeMapperToAdapter,
  categoryMapperToAdapter,
} from './mappers';

export default class TransactionController {
  public static async createTransactions(
    institutionId: string,
    data: Transaction[],
  ) {
    const transactions = data.map((item) => ({
      ticketSymbol: item.ticketSymbol,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      totalCost: item.totalCost,
      type: typeMapperToAdapter[item.type],
      category: categoryMapperToAdapter[item.category],
      date: dateStringDDMMYYYYToYYYYMMDD(item.date),
    })) as Transaction[];

    return SharePortfolioAdapter.createTransactions(
      institutionId,
      transactions,
    );
  }

  public static async listTransactions(
    institutionId: string,
    page: string,
    limit: string,
    order: string,
    monthYear: string[],
    ticker: string[],
  ) {
    const { totalItems, items } = await SharePortfolioAdapter.listTransactions(
      institutionId,
      page,
      limit,
      order,
      monthYear,
      ticker,
    );

    return {
      totalItems,
      items: items.map(({ date, type, category, ...rest }) => ({
        category: categoryMapperToClient[category],
        type: typeMapperToClient[type],
        date: dateStringYYYYMMDDToDDMMYYYY(date),
        ...rest,
      })),
    };
  }
}
