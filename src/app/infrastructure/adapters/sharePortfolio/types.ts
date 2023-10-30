export enum TRANSACTION_TYPE {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum TRANSACTION_CATEGORY {
  TRADE = 'TRADE',
  DIVIDENDS = 'DIVIDENDS',
  SPLIT = 'SPLIT',
  BONUS_SHARE = 'BONUS_SHARE',
  OTHER = 'OTHER',
}

export type Transaction = {
  institutionId: string;
  ticketSymbol: string;
  quantity: number;
  unitPrice: number;
  totalCost: number;
  type: TRANSACTION_TYPE;
  category: TRANSACTION_CATEGORY;
  date: string;
  id: string;
};

export type Pagination<T> = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  items: T[];
};
