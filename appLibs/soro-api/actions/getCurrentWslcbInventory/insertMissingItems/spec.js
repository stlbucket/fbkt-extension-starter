"use strict";
const should = require('should');
const uuid   = require('node-uuid')
const expect = require('chai').expect;
const fbkt   = require('fbkt');

const pipeDef = require('./index');

describe(__filename, function () {

  it('CHECKS FOR SOMETHING', function (done) {
    const user   = {login: "who@cares.com"};
    const params = {
      wslcbInventoryItems: [
        {
          plantid: null,
          inventorystatus: 2,
          is_medical: 0,
          sessiontime: '1479937389',
          usable_weight: '1',
          location: '980270',
          net_package: null,
          currentroom: '1',
          productname: 'Willy Nilly, 1g',
          deleted: 0,
          inventorytype: 28,
          strain: 'Willy Nilly',
          inventorystatustime: '1486957230',
          transactionid_original: '444042',
          seized: null,
          inventoryparentid: ['9800002700000014'],
          source_id: null,
          parentid: ['9800002700000013'],
          wet: 0,
          remaining_quantity: '10',
          transactionid: '579905',
          is_sample: null,
          id: '9800002700000014'
        },
        {
          is_sample: null,
          transactionid: '579905',
          parentid: ['9800002700000019'],
          wet: 0,
          remaining_quantity: '300',
          id: '9800002700000020',
          inventoryparentid: ['9800002700000019'],
          source_id: null,
          transactionid_original: '558628',
          seized: null,
          inventorystatustime: '1486957230',
          inventorytype: 28,
          strain: 'Special-T',
          productname: 'Special-T, 1g',
          deleted: 0,
          location: '980270',
          currentroom: '1',
          net_package: null,
          usable_weight: '1',
          inventorystatus: 2,
          plantid: null,
          is_medical: 0,
          sessiontime: '1486438595'
        },
        {
          deleted: 0,
          productname: null,
          currentroom: null,
          net_package: null,
          location: '980270',
          usable_weight: '100',
          is_medical: 0,
          sessiontime: '1486949778',
          inventorystatus: null,
          plantid: null,
          id: '9800002700000030',
          is_sample: null,
          wet: 0,
          parentid: ['9099449029473720'],
          transactionid: '579755',
          remaining_quantity: '0',
          source_id: null,
          inventoryparentid: ['9800002700000030'],
          inventorystatustime: null,
          transactionid_original: '579622',
          seized: null,
          inventorytype: 13,
          strain: 'Bucket\'s Blend'
        }
      ],
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