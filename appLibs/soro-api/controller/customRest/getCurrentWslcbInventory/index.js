const fbkt = require('fbkt');
const getCurrentWslcbInventory = require('../../../actions/getCurrentWslcbInventory');

module.exports = {
	url:      '/getCurrentWslcbInventory',
	restEndpoints: {
		getAll: {
			disabled: false,
			auth:     'none',
			handler:  function (callInfo) {
        return getCurrentWslcbInventory()
          .then(result => {
            return 'WSLCB INVENTORY SYNCED';
          });
			}
		},
	}
};
