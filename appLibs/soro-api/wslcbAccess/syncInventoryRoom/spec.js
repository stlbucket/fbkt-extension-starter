'use strict';
const expect = require('chai').expect;
const util   = require('util');

const target = require('./index');

describe('syncInventoryRoom', () => {

  it('should get all inventory rooms', (done) => {
    target()
      .then(inventory => {
        console.log('inventory rooms', util.inspect(inventory,false,null));
        done();
      });
  });

});
