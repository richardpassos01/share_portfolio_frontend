import { NextResponse, type NextRequest } from 'next/server';

import { dateStringYYYYMMDDToDDMMYYYY, formatterMoney } from '../../../helpers';
import {
  SharePortfolioAdapter,
  TRANSACTION_TYPE,
  TRANSACTION_CATEGORY,
} from '../../../infrastructure/adapters/sharePortfolio';
import { Context, InstitutionId } from '../../../types';

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

export async function GET(
  request: NextRequest,
  context: Context<InstitutionId>,
) {
  try {
    const institutionId = context.params.institutionId;
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '100';
    const order = searchParams.get('order') || 'desc';

    const { totalItems, items } = await SharePortfolioAdapter.listTransactions(
      institutionId,
      page,
      limit,
      order,
    );

    const result = {
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

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function POST(request) {
  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}
