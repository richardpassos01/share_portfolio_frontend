import {
  TRANSACTION_TYPE,
  TRANSACTION_CATEGORY,
} from '@adapters/sharePortfolio';

export const typeMapperToClient = {
  [TRANSACTION_TYPE.BUY]: 'Compra',
  [TRANSACTION_TYPE.SELL]: 'Venda',
};

export const categoryMapperToClient = {
  [TRANSACTION_CATEGORY.TRADE]: 'Trade',
  [TRANSACTION_CATEGORY.DIVIDENDS]: 'Dividendo/JCP',
  [TRANSACTION_CATEGORY.SPLIT]: 'Desdobro',
  [TRANSACTION_CATEGORY.BONUS_SHARE]: 'Bonificação em Ativos',
  [TRANSACTION_CATEGORY.OTHER]: 'Outros',
};

export const typeMapperToAdapter: Record<any, any> = {
  Compra: TRANSACTION_TYPE.BUY,
  Venda: TRANSACTION_TYPE.SELL,
};

export const categoryMapperToAdapter: Record<string, string> = {
  Credito: TRANSACTION_TYPE.BUY,
  Debito: TRANSACTION_TYPE.SELL,
  'Transferência - Liquidação': TRANSACTION_CATEGORY.TRADE,
  Rendimento: TRANSACTION_CATEGORY.DIVIDENDS,
  'Juros Sobre Capital Próprio': TRANSACTION_CATEGORY.DIVIDENDS,
  Dividendo: TRANSACTION_CATEGORY.DIVIDENDS,
  Desdobro: TRANSACTION_CATEGORY.SPLIT,
  'Bonificação em Ativos': TRANSACTION_CATEGORY.BONUS_SHARE,
  'Direitos de Subscrição - Não Exercido': TRANSACTION_CATEGORY.OTHER,
  'Cessão de Direitos - Solicitada': TRANSACTION_CATEGORY.OTHER,
  'Cessão de Direitos': TRANSACTION_CATEGORY.OTHER,
  'Direito de Subscrição': TRANSACTION_CATEGORY.OTHER,
  Atualização: TRANSACTION_CATEGORY.OTHER,
};
