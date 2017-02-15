"use strict";
const R = require('ramda');
const Promise = require('bluebird');
const fbkt = require('fbkt');
const gql = require("graphql");

// const ContactInfo = require('../ContactInfo');
// const Location = require('../Location');

module.exports = new gql.GraphQLObjectType({
	name: 'InventoryItem',
	fields: () => ({
    inventorytype: {
      type: gql.GraphQLInt,
    },
    wet: {
      type: gql.GraphQLInt,
    },
    deleted: {
      type: gql.GraphQLInt,
    },
    inventorystatus: {
      type: gql.GraphQLInt,
    },
    is_medical: {
      type: gql.GraphQLInt,
    },
    inventorystatustime: {
      type: gql.GraphQLString
    },
    productname: {
      type: gql.GraphQLString
    },
    usable_weight: {
      type: gql.GraphQLString
    },
    currentroom: {
      type: gql.GraphQLString
    },
    location: {
      type: gql.GraphQLString
    },
    transactionid: {
      type: gql.GraphQLString
    },
    strain: {
      type: gql.GraphQLString
    },
    remaining_quantity: {
      type: gql.GraphQLString
    },
    id: {
      type: gql.GraphQLString
    },
    sessiontime: {
      type: gql.GraphQLString
    },
    inventoryparentid: {
      type: new gql.GraphQLList(gql.GraphQLString)
    },
    parentid: {
      type: new gql.GraphQLList(gql.GraphQLString)
    },
    is_sample: {
      type: gql.GraphQLBoolean
    },
    net_package: {
      type: gql.GraphQLFloat
    },
    source_id: {
      type: gql.GraphQLString
    },
    plantid: {
      type: new gql.GraphQLList(gql.GraphQLString)
    },
    transactionid_original: {
      type: gql.GraphQLInt
    },
    seized: {
      type: gql.GraphQLInt
    }
  })
});





// const j = {
//   inventorystatustime
//   inventorytype
//   productname
//   usable_weight
//   is_sample
//   currentroom
//   wet
//   location
//   transactionid
//   net_package
//   deleted
//   strain
//   inventorystatus
//   remaining_quantity
//   source_id
//   inventoryparentid
//   id
//   plantid
//   transactionid_original
//   is_medical
//   sessiontime
//   seized
//   parentid
// }