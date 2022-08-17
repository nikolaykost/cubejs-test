module.exports={
  scheduledRefreshContexts: async () => [
  { securityContext: { tenant: 'development' } },
  { securityContext: { tenant: 'production' } },
],
}; // from test 0.7183600933791277