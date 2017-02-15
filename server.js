let Fbkt = require('fbkt');
const fbktpg = require('fbkt-pg');
const fbktLogin = require('fbkt-login');
const config = require('./config');
const appLibs = require('./appLibs');

const libs = {
  dbAccess:		fbktpg.dbAccess,
  coreDb:			fbktpg.coreDb,
  dbManager:	fbktpg.dbManager,
  pgRestApi:	fbktpg.pgRestApi,
  fbktLogin:  fbktLogin.core,
  soroApi:	  appLibs.api
};

const fbkt = Fbkt(config, libs);

fbkt.runServer();