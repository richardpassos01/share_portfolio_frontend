export const dateToMonthYear = (date: Date): string =>
  date.toISOString().slice(0, 7);

export const dateStringYYYYMMDDToDDMMYYYY = (dateString: string): string =>
  dateString.slice(0, 10).split('-').reverse().join('/');

export const dateStringDDMMYYYYToYYYYMMDD = (dateString: string): string =>
  dateString.split('/').reverse().join('-');

export const formatterMoney = (amount: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
