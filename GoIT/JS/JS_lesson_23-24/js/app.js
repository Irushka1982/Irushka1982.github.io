requirejs.config({
	paths:{
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery',
		'template': 'template'
	},
	shim:{
		'jquery':{
			exports:'jQuery'
		},
		'template':{
			exports:'template'
		}
	}

});


require(

	[
	
	'template',
	'module',
	'view',
	'controller',
	'jquery'
],
	function(  template, module, view, controller, $){
		console.log('$', $);
	console.log('template', template);	
console.log('module', module);
console.log('view', view);
console.log('controller', controller);

	}
);