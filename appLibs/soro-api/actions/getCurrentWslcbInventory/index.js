"use strict";
const fbkt = require('fbkt');
const syncInventory = require('../../wslcbAccess/syncInventory');
const insertMissingItems = require('./insertMissingItems');

module.exports = (callInfo)=> {
  return fbkt().FbktPipe({
    name: 'getCurrentWslcbInventory',
    filename: __filename,
    expectedParams: {},
    pipelineParams: {
      wslcbInventoryItems: 'syncInventory'
    },
    pipelineSteps: {
      'syncInventory': function (callInfo) {
        return syncInventory();
      },
      'saveInventory':  callInfo => {
        // fbkt().clog('CURRENT INVENTORY', callInfo.params.wslcbInventory.filter((item, index) => { return index < 3; }), true);

        return insertMissingItems(callInfo);
      }
    }
  }, callInfo || {});
};