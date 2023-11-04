import { SharePortfolioAdapter } from '@adapters/sharePortfolio';

export default class PortfolioController {
  public static async get(institutionId: string) {
    return SharePortfolioAdapter.getPortfolio(institutionId);
  }

  public static async resync(institutionId: string) {
    return SharePortfolioAdapter.resyncPortfolio(institutionId);
  }
}
