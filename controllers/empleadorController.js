var empleador = require('../schemas/empleador.js');
var mongoose = require('mongoose');

exports.getEmpleadores = {
  handler: function(request, reply){
    var empleadores = empleador.find({});
    reply(empleadores);
  }
}
exports.getEmpleadorId = {
  handler : function(request, reply){
    empleador.findOne({'_id' : request.params._id}, function(err, Empleador){
      if(!err && Empleador){
        return reply(Empleador);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Empleador not found'));
      }
    });
  }
}
exports.getEmpleadorRTN = {

  handler : function(request, reply){
    empleador.find({'rtn' : request.params.rtn}, function(err, Empleadores){
      if(!err && Empleadores){
        return reply(Empleadores);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Empleador not found'));
      }
    });
  }
}

exports.editEmpleador = {

  handler: function(request, reply){
    empleador.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre_empresa : request.payload.nombre_empresa,
          rtn : request.payload.rtn,
          ceo : request.payload.ceo,
          direccion : request.payload.direccion,
          telefono: request.payload.telefono,
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Empleador not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteEmpleador = {

  handler: function(request, reply){
    empleador.findOne({'_id' : request.params._id}, function(err, Empleador){
      if(err){
        return reply(boom.badRequest("Could not delete Empleador"));
      }else if(!err && Empleador){
        Empleador.remove();
        return reply('Empleador deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createEmpleador = {

  handler: function(request, reply){
    var newEmpleador = new empleador({
      nombre_empresa : request.payload.nombre_empresa,
      rtn : request.payload.rtn,
      ceo : request.payload.ceo,
      direccion : request.payload.direccion,
      telefono: request.payload.telefono,
      password: request.payload.password,
      scope: request.payload.scope
    });
    newEmpleador.save(function(err){
      if(!err){
        return reply({
          success: true
        });
      }else{
        return reply({
          success: false
        })
      }
    });
  }
}
