let Fbkt = require('fbkt');
let config = require('./config/dev');

const appLibs = {
  appLibOne:	require('./appLibs/appLibOne')
};

const fbkt = Fbkt(config, appLibs);

fbkt.runServer();
