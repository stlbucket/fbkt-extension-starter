"use strict";
const fbkt = require('fbkt');

module.exports = callInfo => {
  return fbkt().FbktPipe({
    name: 'insertMissingItems',
    filename: __filename,
    expectedParams: {},
    pipelineParams: {},
    pipelineSteps: {
      "insertPatchRecord": callInfo => {
        return fbkt().sqlTemplateManager({
          params: {
            templateFilePath: `${__dirname}/template.hbs`,
            templateData: {
              wslcbInventoryItems: callInfo.params.wslcbInventoryItems
            },
            executionMode: 'REPORTIT',
            reportFileName: './ignoreAllThis/insertMissingWsclbInventoryItems.txt',
          }
        });
      },
    }
  }, callInfo);
};