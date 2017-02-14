module.exports = {
  appRouteFilter: process.env.APP_ROUTE_FILTER,
  restErrorMode: process.env.REST_ERROR_MODE,
  defaultEntityControllerAuth: process.env.DEFAULT_ENTITY_CONTROLLER_AUTH,
  dbApplicationLib: process.env.DB_APPLICATION_LIB,
  dbOrganizationsAndUsersLibs: process.env.DB_ORGANIZATIONS_AND_USERS_LIBS.split(','),
  dbAccess: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_CONNECTION_HOST,
      port: process.env.DB_CONNECTION_PORT,
      user: process.env.DB_CONNECTION_USER,
      password: process.env.DB_CONNECTION_PASSWORD,
      charset: process.env.DB_CONNECTION_CHARSET,
      database: process.env.DB_CONNECTION_DATABASE
    },
    debug: process.env.DB_DEBUG === 'true',
  }
};