export const getCurrentYearMonth = () => new Date().toISOString().slice(0, 7);

export const dateToMonthYear = (date: Date): string =>
  date.toISOString().slice(0, 7);

export const dateStringYYYYMMDDToDDMMYYYY = (dateString: string): string =>
  dateString.slice(0, 10).split('-').reverse().join('/');

export const dateStringDDMMYYYYToYYYYMMDD = (dateString: string): string =>
  dateString.split('/').reverse().join('-');

export const yearMonthFormatter = (yearMonth: string) =>
  yearMonth.split('-').reverse().join('/');

export const calculateBalanceNetEarning = (balance: {
  tradeEarning: number;
  dividendEarning: number;
  tax: number;
  taxWithholding: number;
  loss: number;
}) =>
  balance.tradeEarning +
  balance.dividendEarning -
  balance.tax -
  balance.taxWithholding -
  balance.loss;

export const formatterMoney = (amount: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
