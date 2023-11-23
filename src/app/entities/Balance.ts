import { MONTHLY_BALANCE_TYPE } from '@adapters/sharePortfolio';
import {
  calculateBalanceNetEarning,
  formatterMoney,
  yearMonthFormatter,
} from '@helpers';

const getReasons = (
  totalSold: number,
  tax: number,
  taxGross: number,
  taxWithholding: number,
  restitution: number,
  type: MONTHLY_BALANCE_TYPE,
) => {
  const SELL_LIMIT = '20,000 R$';

  const sold = `Foi vendido ${formatterMoney(totalSold)} no mês.`;

  const taxValue = {
    hasTax: `Você deve pagar ${formatterMoney(tax)} de impostos.`,
    dontHasTax: 'Você não precisa pagar impostos.',
    dontNeedToPay: `Você deveria pagar ${formatterMoney(
      taxGross,
    )} de impostos.`,
  };

  const hasTaxReason = {
    DAY_TRADE: 'Porque foi feito day trade.',
    SWING_TRADE: `Porque foi vendido acima de ${SELL_LIMIT} no mês.`,
  };

  const dontHasTaxReason = {
    noTax: `Porque não foi excedido o valor de ${SELL_LIMIT} em vendas ou feito day trade.`,
    taxDeductedFromLoss: 'Porque o valor foi deduzido das perdas.',
  };

  const dontNeedToPayReason = `No entanto, foi recolhido ${formatterMoney(
    taxWithholding,
  )} de impostos na fonte pela corretora. Esse valor é maior ou igual ao imposto devido, portanto, não é necessário pagar impostos no mês. Você pode solicitar ${formatterMoney(
    restitution,
  )} de restituição no IRPF anual.`;

  const conditions = [
    {
      check: restitution > 0,
      message: sold + taxValue.dontNeedToPay + dontNeedToPayReason,
    },
    {
      check: tax > 0,
      message: sold + taxValue.hasTax + hasTaxReason[type],
    },
    {
      check: tax === 0,
      message:
        taxValue.dontHasTax +
        (taxGross !== tax
          ? dontHasTaxReason.taxDeductedFromLoss
          : dontHasTaxReason.noTax),
    },
  ];

  const result = conditions.find((condition) => condition.check);
  return result ? result.message : '';
};

export default class Balance {
  public yearMonth: string;
  public netEarning: string;
  public loss: string;
  public taxWithholding: string;
  public tax: string;
  public tradeEarning: string;
  public dividendEarning: string;
  public totalSold: string;
  public restitution: string;
  public reason: string;
  public currentTotalLoss: string;

  constructor(
    yearMonth: string,
    loss: number,
    taxWithholding: number,
    tax: number,
    tradeEarning: number,
    dividendEarning: number,
    type: MONTHLY_BALANCE_TYPE,
    taxGross: number,
    totalSold: number,
    restitution: number,
    currentTotalLoss: number,
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
    this.totalSold = formatterMoney(totalSold);
    this.restitution = formatterMoney(restitution);
    this.currentTotalLoss = formatterMoney(currentTotalLoss);
    this.reason = getReasons(
      totalSold,
      tax,
      taxGross,
      taxWithholding,
      restitution,
      type,
    );
  }
}
