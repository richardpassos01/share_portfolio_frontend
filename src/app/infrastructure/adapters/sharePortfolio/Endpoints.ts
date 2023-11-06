enum Endpoints {
  CREATE_INSTITUTION = '/institution',
  GET_INSTITUTION = '/institution/:institutionId',
  GET_TOTAL_BALANCE = '/total-balance/:institutionId',
  LIST_MONTHLY_BALANCES = '/monthly-balances/:institutionId',
  RESYNC = '/resync/:institutionId',
  LIST_TRANSACTIONS = '/transactions/:institutionId?page=:page&limit=:limit&order=:order',
  CREATE_TRANSACTIONS = '/transactions/:institutionId',
  DELETE_TRANSACTIONS = '/transactions/:institutionId',
}

export default Endpoints;
