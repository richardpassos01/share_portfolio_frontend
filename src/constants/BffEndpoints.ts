enum BffEndpoints {
  GET_PORTFOLIO = '/api/:parentId/portfolio',
  RESYNC_PORTFOLIO = '/api/:parentId/portfolio',
  CREATE_TRANSACTIONS = '/api/:parentId/transactions',
  LIST_TRANSACTIONS = '/api/:parentId/transactions?page=:page&limit=:limit&order=:order',
  SIGN_UP = '/api/auth/signup',
}

export default BffEndpoints;
