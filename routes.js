var empleadoController = require('./controllers/empleadoController');
var empleadorController = require('./controllers/empleadorController');
var oferta_trabajoController = require('./controllers/oferta_trabajoController');
var authenticationController = require('./controllers/authenticationController');
exports.endpoints = [
	{
		method: 'GET',
		path: '/',
		config:{
			handler:function(request, reply){
				console.log(request.query);
				return reply('Hola');
			}
		}
	},
	{
			method: 'GET',
			path: '/empleados/searchbyid/{identificacion}',
			config: empleadoController.getEmpleadoId
 	},

	{
			method: 'GET',
			path: '/empleados/searchbyidentificacion/{id}',
			config: empleadoController.getEmpleadoIdentificacion
 	},
 	{
 			method: 'PUT',
 			path: '/empleados/update/{_id}',
 			config: empleadoController.editEmpleado

 	},
	{
			method: 'DELETE',
			path: '/empleados/delete/{_id}',
			config: empleadoController.deleteEmpleado
 	},
	{
			method: 'POST',
			path: '/empleados/create',
			config: empleadoController.createEmpleado
 	},
	{
			method: 'GET',
		 	path: '/empleadores',
		 	config: empleadorController.getEmpleadores
 	},

	{
			method: 'GET',
			path: '/empleadores/searchbyid/{_id}',
			config: empleadorController.getEmpleadorId
 	},
	{
			method: 'GET',
			path: '/empleadores/searchbyRTN/{rtn}',
			config: empleadorController.getEmpleadorRTN
 	},
 	{
 			method: 'PUT',
 			path: '/empleadores/update/{_id}',
 			config: empleadorController.editEmpleador

 	},
	{
			method: 'DELETE',
			path: '/empleadores/delete/{_id}',
			config: empleadorController.deleteEmpleador
 	},
	{
			method: 'POST',
			path: '/empleadores/create',
			config: empleadorController.createEmpleador
 	},
	{
			method: 'GET',
		 	path: '/ofertas',
		 	config: oferta_trabajoController.getOfertas_Trabajo
 	},

	{
			method: 'GET',
			path: '/ofertas/searchbyid/{_id}',
			config: oferta_trabajoController.getOfertas_TrabajoId
 	},
 	{
 			method: 'PUT',
 			path: '/ofertas/update/{_id}',
 			config: oferta_trabajoController.editOferta_Trabajo

 	},
	{
			method: 'DELETE',
			path: '/ofertas/delete/{_id}',
			config: oferta_trabajoController.deleteOferta_Trabajo
 	},
	{
		//revisado
			method: 'POST',
			path: '/ofertas/create',
			config: oferta_trabajoController.createOferta
 	},
	{
		method: 'POST',
		path: '/login',
		config: authenticationController.login
	},{
		method: 'POST',
		path: '/signup',
		config: empleadoController.singUp
	}

];
