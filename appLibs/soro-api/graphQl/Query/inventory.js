const fbkt = require('fbkt');
const gql = require('graphql');
const InventoryItem = require('./graphs/InventoryItem');

const syncInventory = require('../../wslcbAccess/syncInventory');

module.exports = {
	type: new gql.GraphQLList(InventoryItem),
  resolve(){
    return syncInventory()
      .then(inventory => {
        console.log('INVENTORY', inventory.length, inventory[0]);
        return inventory;
      });
  }
};


// module.exports = {
//   type: new gql.GraphQLList(InventoryItem),
//   resolve: {
//     return syncInventory()
//       .then(inventory => {
//         console.log('INVENTORY', inventory.length, inventory[0]);
//         return inventory;
//       });
// }
// }
// ;