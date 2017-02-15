'use strict';
const fbkt = require('fbkt');
const expect = require('chai').expect;
const util   = require('util');

const target = require('./index');

describe('syncInventory', () => {

  it.only('should get all inventory', (done) => {
    target()
      .then(inventory => {
        fbkt().clog('inventory', util.inspect(inventory,false,null));
        done();
      });
  });

});
