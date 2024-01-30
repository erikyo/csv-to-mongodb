export const config = {
  api: {
    host: '0.0.0.0',
    port: 3000,
  },
  db: {
    host: '0.0.0.0',
    port: 27017,
    name: 'csv-data'
  }
};

export const Options = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'csv API',
      description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: '127.0.0.1:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
};
