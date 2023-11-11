import { SharePortfolioAdapter } from '@adapters/sharePortfolio';

export default class ResyncController {
  public static async resync(institutionId: string) {
    return SharePortfolioAdapter.resync(institutionId);
  }
}
