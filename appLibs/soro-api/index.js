module.exports = {
	packageName:	'soro-api',
	libRelativePath:	function(){
		return __dirname;
	},
  schema: 'soro',
  dbScripts:  [
    'appLibs/soro-api/db/scripts/1_0_0.structure.sql'
  ],
  graphQl: require('./graphQl'),
	serverCommandMap:	require('./serverCommandMap'),
	serverExtensions:	require('./serverExtensions'),
	customRestControllers:	[
		require('./controller/customRest/pong'),
    require('./controller/customRest/getCurrentWslcbInventory'),
    require('./controller/customRest/currentInventory')
	],
};