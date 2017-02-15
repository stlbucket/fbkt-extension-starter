const fbkt = require('fbkt');
const getCurrentbInventory = require('../../../actions/getCurrentbInventory');

module.exports = {
	url:      '/currentInventory',
	restEndpoints: {
		getAll: {
			disabled: false,
			auth:     'none',
			handler:  function (callInfo) {
        return getCurrentbInventory({});
			}
		},
	}
};
