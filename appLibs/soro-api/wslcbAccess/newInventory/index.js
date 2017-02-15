const axios    = require('axios');

const login = require('../login');



module.exports = (newInventory, location)=> {
  return login()
    .then(session => {
      console.log('SESSION', session);
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
          "action": "inventory_new",
          "data": newInventory,
          "location": location,
          "plantsource": "3263345802667622"
        }
      })
        .then(result => {
          return result.data;
        })
    });
};