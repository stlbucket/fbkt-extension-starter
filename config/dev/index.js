const appConfig = require('../index');

const R = require('ramda');

module.exports = R.merge(appConfig, {
	appRouteFilter:	'*',
  restErrorMode:	'OPEN',
  dbAccess:	{
    client: 'postgres',
    connection: {
      host: '127.0.0.1',
      port: '5432',
      user: 'postgres',
      password: 'fbktp@$sword',
      charset: 'utf8',
      database: 'fbkt_pg_dev'
    },
    debug: false,
  }
  ,defaultEntityControllerAuth:	'none'
});
