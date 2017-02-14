let Fbkt = require('fbkt');
// const fbktpg = require('fbkt-pg');
// const fbktLogin = require('fbkt-login');
let config = require('./config/dev');
const appLibs = require('./appLibs');

const libs = {
  // dbAccess:		fbktpg.dbAccess,
  // coreDb:			fbktpg.coreDb,
  // dbManager:	fbktpg.dbManager,
  // pgRestApi:	fbktpg.pgRestApi,
  // fbktLogin:  fbktLogin.core,
  appLibOne:	appLibs.appLibOne
};

const fbkt = Fbkt(config, libs);

fbkt.runServer();