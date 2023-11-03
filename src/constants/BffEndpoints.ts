enum BffEndpoints {
  CREATE_TRANSACTIONS = '/api/transactions/:parentId',
  LIST_TRANSACTIONS = '/api/transactions/:parentId?page=:page&limit=:limit&order=:order',
  SIGN_UP = '/api/auth/signup',
}

export default BffEndpoints;
