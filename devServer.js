let Fbkt = require('fbkt');
let config = require('./config/dev');
const fbktpg = require('fbkt-pg');

const appLibs = {
  dbAccess:		fbktpg.dbAccess,
  coreDb:			fbktpg.coreDb,
  dbManager:	fbktpg.dbManager,
  pgRestApi:	fbktpg.pgRestApi,
  appLibOne:	require('./appLibs/appLibOne')
};

const fbkt = Fbkt(config, appLibs);

fbkt.runServer();