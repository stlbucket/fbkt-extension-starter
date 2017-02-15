'use strict';
const expect = require('chai').expect;
const util   = require('util');

const target = require('./index');

describe('sync plant', () => {

  it('sync plant', (done) => {
    target()
      .then(inventory => {
        console.log('plants', util.inspect(inventory,false,null));
        done();
      });
  });

});
