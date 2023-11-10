import {
  calculateBalanceNetEarning,
  formatterMoney,
  yearMonthFormatter,
} from '@helpers';

export default class Balance {
  public yearMonth: string;
  public netEarning: string;
  public loss: string;
  public taxWithholding: string;
  public tax: string;
  public tradeEarning: string;
  public dividendEarning: string;

  constructor(
    yearMonth: string,
    loss: number,
    taxWithholding: number,
    tax: number,
    tradeEarning: number,
    dividendEarning: number,
  ) {
    this.yearMonth = yearMonthFormatter(yearMonth);
    this.netEarning = formatterMoney(
      calculateBalanceNetEarning({
        loss,
        taxWithholding,
        tax,
        tradeEarning,
        dividendEarning,
      }),
    );
    this.loss = formatterMoney(loss);
    this.taxWithholding = formatterMoney(taxWithholding);
    this.tax = formatterMoney(tax);
    this.tradeEarning = formatterMoney(tradeEarning);
    this.dividendEarning = formatterMoney(dividendEarning);
  }
}
