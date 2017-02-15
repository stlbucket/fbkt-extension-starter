'use strict';
const expect = require('chai').expect;
const util   = require('util');

const target = require('./index');

describe('syncInventory', () => {

  it('should create new inventory', (done) => {
    target({
        "invtype": "7",
        "quantity": "50",
        "strain": "Bucket's Blend",
        "source_id": "3263345802667622"
      },
      "980270"
    )
      .then(inventory => {
        console.log('new inventory', util.inspect(inventory,false,null));
        done();
      });
  });

});
