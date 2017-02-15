const fbkt = require('fbkt');
const Promise = require('bluebird');
const axios    = require('axios');

let _session = null;


module.exports = ()=> {
  if (_session !== null){
    return Promise.resolve(_session);
  } else {
    return axios({
      url: 'https://wslcb.mjtraceability.com/serverjson.asp',
      method: 'post',
      headers: {
        'Content-Type': 'text/JSON'
      },
      data: {
        "training": "1",
        "enforce_rules_training": "1",
        "API": "4.0",
        "action": "login",
        "username": "jerry@soro.biz",
        "password": "2&eJPxMF^wGJ",
        "license_number": "980000270"
      }
    })
      .then(result => {
        _session = result.data;
        fbkt().clog('NEW SESSION', _session);
        return _session;
      })
  }
};