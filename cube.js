// some
module.exports={
  scheduledRefreshContexts: async () => [
  { securityContext: { tenant: 'development' } },
  { securityContext: { tenant: 'production' } },
  { securityContext: { tenant: 'test' } },
  { securityContext: { tenant: 'valid' } },
  { securityContext: { tenant: 'invalid' } },
  { securityContext: { tenant: 'part' } },
],
}; // from test 0.7183600933791277
