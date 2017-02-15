"use strict";
const fbkt = require('fbkt');

module.exports = (callInfo)=> {
  return fbkt().FbktPipe({
    name: 'getCurrentInventory',
    filename: __filename,
    expectedParams: {},
    pipelineParams: {
    },
    pipelineSteps: {
      'getCurrentInventory': callInfo => {
        return fbkt().dbTree.soro.table.wslcb_inventory_item.getAll(callInfo);
      }
    }
  }, callInfo);
};