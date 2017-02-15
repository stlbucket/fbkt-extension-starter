"use strict";
const should = require('should');
const uuid   = require('node-uuid');
const expect = require('chai').expect;
const fbkt   = require('fbkt');

const pipeDef = require('./index');

describe(__filename, function () {

  it('sync inventory', function (done) {
    const user   = {login: "who@cares.com"};
    const params = {
    };

    const pipe = pipeDef();

    pipe.execute({
      user: user,
      params: params,
    })
      .then((result)=> {
        // fbkt().clog('FUNCTION BUCKET WORKSPACE', pipe.ws, true);
        done();
      })
      .catch(error=> {
        fbkt().clog('UNEXPECTED ERROR', error);
        done(error);
      });

  });


});