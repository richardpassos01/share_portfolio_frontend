import { dateStringYYYYMMDDToDDMMYYYY, formatterMoney } from '../../../helpers';
import { HttpClient } from '../../providers';
import SharePortfolio from '../sharePortfolio/SharePortfolio';
import {
  TRANSACTION_TYPE,
  TRANSACTION_CATEGORY,
} from '../sharePortfolio/types';
import Endpoints from './Endpoints';

const typeMapper = (type: TRANSACTION_TYPE) => {
  const mapper = {
    [TRANSACTION_TYPE.BUY]: 'Compra',
    [TRANSACTION_TYPE.SELL]: 'Venda',
  };

  return mapper[type];
};

const categoryMapper = (category: TRANSACTION_CATEGORY) => {
  const mapper = {
    [TRANSACTION_CATEGORY.TRADE]: 'Trade',
    [TRANSACTION_CATEGORY.DIVIDENDS]: 'Dividendo/JCP', // Rendimento/jcp/dividendo
    [TRANSACTION_CATEGORY.SPLIT]: 'Desdobro',
    [TRANSACTION_CATEGORY.BONUS_SHARE]: 'Bonificação em Ativos',
    [TRANSACTION_CATEGORY.OTHER]: 'Outros' /**
    'Direitos de Subscrição - Não Exercido'
    'Cessão de Direitos - Solicitada': 
    'Cessão de Direitos',
    'Direito de Subscrição'
    Atualização,
    */,
  };

  return mapper[category];
};

export default class Bff {
  private static instance: HttpClient;
  private static baseURL: string = process.env.NEXT_PUBLIC_BFF_API ?? '';

  private static getInstance(): HttpClient {
    if (!Bff.instance) {
      Bff.instance = new HttpClient(this.baseURL);
    }

    return Bff.instance;
  }

  public static signup(data: Record<string, string>) {
    return Bff.getInstance().post(Endpoints.SIGNUP, data);
  }

  public static async listTransactions(
    institutionId: string,
    page: number,
    limit: number,
    order = 'desc',
  ) {
    const { totalItems, results } = await SharePortfolio.listTransactions(
      institutionId,
      page,
      limit,
      order,
    );

    return {
      totalItems,
      transactions: results.map(
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
