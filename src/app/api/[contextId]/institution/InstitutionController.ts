import { SharePortfolioAdapter } from '@adapters/sharePortfolio';

type Payload = {
  name: string;
};

export default class InstitutionController {
  public static async create(userId: string, data: Payload) {
    return SharePortfolioAdapter.createInstituion({
      userId,
      name: data.name,
    });
  }

  public static async listInstitutions(userId: string) {
    return SharePortfolioAdapter.listInstitutions(userId);
  }
}
