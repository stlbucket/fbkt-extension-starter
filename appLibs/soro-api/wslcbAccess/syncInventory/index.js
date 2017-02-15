const fbkt = require('fbkt');
const axios    = require('axios');
const login = require('../login');



module.exports = ()=> {
  return login()
    .then(session => {
      fbkt().clog('SESSION', session);
      return axios({
        url: 'https://wslcb.mjtraceability.com/serverjson.asp',
        method: 'post',
        headers: {
          'Content-Type': 'text/JSON'
        },
        data: {
          "training": "1",
          "enforce_rules_training": "1",
          "sessionid": session.sessionid,
          "API": "4.0",
          "action": "sync_inventory",
        }
      })
        .then(result => {
          return result.data.inventory;
        })
    });
};