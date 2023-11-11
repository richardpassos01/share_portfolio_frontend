enum BffEndpoints {
  GET_OVERVIEW = '/api/:institutionId/overview',
  LIST_MONTHLY_BALANCES = '/api/:institutionId/monthlyBalance',
  RESYNC = '/api/:institutionId/resync',
  CREATE_TRANSACTIONS = '/api/:institutionId/transactions',
  LIST_TRANSACTIONS = '/api/:institutionId/transactions?page=:page&limit=:limit&order=:order',
  LIST_INSTITUTIONS = '/api/:userId/institution',
  CREATE_INSTITUTION = '/api/:userId/institution',
  SIGN_UP = '/api/auth/signup',
}

export default BffEndpoints;
