export const dateStringYYYYMMDDToDDMMYYYY = (dateString: string): string =>
  dateString.slice(0, 10).split('-').reverse().join('/');

export const formatterMoney = (amount: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
