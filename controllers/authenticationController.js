var joi = require('joi');
var boom = require('boom');
var empleado = require('../schemas/empleado');
var empleador = require('../schemas/empleador');
var SHA3 = require("crypto-js/sha3");

exports.login = {
  auth: false,
  validate: {
    payload: {
      identidad: joi.string().required(),
      password: joi.string().min(2).max(200).required()
    }
  },
  handler: function(request, reply) {
    console.log(request.payload.password);
    var password = String(SHA3(request.payload.password));
    empleado.find({"identificacion": request.payload.identidad, "password": password}, function(err, empleado){
      // console.log('identificacion: ', request.payload.identidad, 'empleado', empleado[0])
      if(!err){
        if(empleado.length > 0){
          // request.cookieAuth.set(empleado.identificacion);
          console.log("identidad: "+ empleado[0].identificacion+ " scope: "+ empleado[0].scope);
          return reply({identidad: empleado[0].identificacion, scope: empleado[0].scope, success:true});
        }else{
          empleador.find({"rtn": request.payload.identidad, "password": password},
          function(err, empleador){
            if(!err){
              if(empleador.length > 0){
                return reply({identidad: empleador[0].rtn, scope: empleador[0].scope, success:true});
              }else{
                return reply({message: boom.unauthorized('Wrong email or password'), success:false});
              }
            }
            console.log("nomon");
            return reply({message: boom.unauthorized('Wrong email or password'), success:false});
          }
          console.log("nomon2");
          return reply({ message: boom.notAcceptable('Error Executing Query'), success: false});
        });
      }
    };
    exports.logout = {
      // auth: {
      //   mode:'required',
      //   strategy:'session'
      // },
      handler: function(request, reply) {
        request.cookieAuth.clear();
        return reply('Logout Successful!');
      }
    };
