enum Endpoints {
  CREATE_INSTITUTION = '/institution',
  LIST_INSTITUTIONS = '/institutions/:userId',
  GET_TOTAL_BALANCE = '/total-balance/:institutionId',
  LIST_MONTHLY_BALANCES = '/monthly-balances/:institutionId',
  RESYNC = '/resync/:institutionId',
  LIST_TRANSACTIONS = '/transactions/:institutionId?page=:page&limit=:limit&order=:order',
  CREATE_TRANSACTIONS = '/transactions/:institutionId',
  DELETE_TRANSACTIONS = '/transactions/:institutionId',
  LIST_MONTH_YEARS = '/transactions/:institutionId/list-month-years',
  LIST_SHARES = '/shares/:institutionId',
}

export default Endpoints;
