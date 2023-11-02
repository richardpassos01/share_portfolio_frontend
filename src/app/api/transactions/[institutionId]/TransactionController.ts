import { dateStringYYYYMMDDToDDMMYYYY, formatterMoney } from '@helpers';
import { SharePortfolioAdapter } from '@adapters/sharePortfolio';
import { categoryMapper, typeMapper } from './mappers';

export default class TransactionController {
  public static async listTransactions(
    institutionId: string,
    page: string,
    limit: string,
    order: string,
  ) {
    const { totalItems, items } = await SharePortfolioAdapter.listTransactions(
      institutionId,
      page,
      limit,
      order,
    );

    return {
      totalItems,
      items: items.map(
        ({ date, totalCost, type, category, unitPrice, ...rest }) => ({
          category: categoryMapper(category),
          type: typeMapper(type),
          date: dateStringYYYYMMDDToDDMMYYYY(date),
          unitPrice: formatterMoney(unitPrice),
          totalCost: formatterMoney(totalCost),
          ...rest,
        }),
      ),
    };
  }
}
