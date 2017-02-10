let Fbkt = require('fbkt');
let config = require('./config/dev');
const fbktpg = require('fbkt-pg');
const fbktLogin = require('fbkt-login');
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