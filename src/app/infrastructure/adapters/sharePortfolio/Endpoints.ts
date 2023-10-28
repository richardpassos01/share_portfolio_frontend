enum Endpoints {
  CREATE_INSTITUTION = '/institution',
  GET_INSTITUTION = '/institution/:institutionId',
  GET_PORTFOLIO = '/portfolio/:institutionId',
  RESYNC_PORTFOLIO = '/portfolio/:institutionId/re-sync',
  CREATE_TRANSACTIONS = '/transactions/:institutionId',
  DELETE_TRANSACTIONS = '/transactions/:institutionId',
}

export default Endpoints;
