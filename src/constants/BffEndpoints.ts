enum BffEndpoints {
  GET_OVERVIEW = '/api/:parentId/overview',
  LIST_MONTHLY_BALANCES = '/api/:parentId/monthlyBalance',
  RESYNC = '/api/:parentId/resync',
  CREATE_TRANSACTIONS = '/api/:parentId/transactions',
  LIST_TRANSACTIONS = '/api/:parentId/transactions?page=:page&limit=:limit&order=:order',
  SIGN_UP = '/api/auth/signup',
}

export default BffEndpoints;
