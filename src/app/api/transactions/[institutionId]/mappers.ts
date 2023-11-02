import {
  TRANSACTION_TYPE,
  TRANSACTION_CATEGORY,
} from '@adapters/sharePortfolio';

export const typeMapper = (type: TRANSACTION_TYPE) => {
  const mapper = {
    [TRANSACTION_TYPE.BUY]: 'Compra',
    [TRANSACTION_TYPE.SELL]: 'Venda',
  };

  return mapper[type];
};

export const categoryMapper = (category: TRANSACTION_CATEGORY) => {
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
