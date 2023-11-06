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
  ticketSymbol: string;
  quantity: number;
  unitPrice: number;
  totalCost: number;
  type: TRANSACTION_TYPE;
  category: TRANSACTION_CATEGORY;
  date: string;
  id?: string;
};

export type Pagination<T> = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  items: T[];
};

export type TotalBalance = {
  netEarning: number;
  loss: number;
};

export enum MONTHLY_BALANCE_TYPE {
  DAY_TRADE = 'DAY_TRADE',
  SWING_TRADE = 'SWING_TRADE',
}

export type MonthlyBalance = {
  institutionId: string;
  yearMonth: string;
  tradeEarning: number;
  dividendEarning: number;
  tax: number;
  taxWithholding: number;
  loss: number;
  type: MONTHLY_BALANCE_TYPE;
};

export type Institution = {
  name: string;
  userId: string;
  id: string;
};
