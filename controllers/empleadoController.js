var empleado = require('../schemas/empleado.js');
var mongoose = require('mongoose');

exports.getEmpleados = {

  handler: function(request, reply){
    var empleados = empleado.find({});
    reply(empleados);
  }
}
exports.getEmpleadoId = {

  handler : function(request, reply){
    empleado.findOne({'_id' : request.params._id}, function(err, Empleado){
      if(!err && Empleado){
        return reply(Empleado);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Empleado not found'));
      }
    });
  }
}
exports.getEmpleadoIdentificacion = {
  handler : function(request, reply){
    empleado.find({'identificacion' : request.params.identificacion}, function(err, Empleados){
      if(!err && Empleados){
        return reply(Empleados);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Empleado not found'));
      }
    });
  }
}

exports.editEmpleado = {

  handler: function(request, reply){
    empleado.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre : request.payload.nombre,
          identificacion : request.payload.idProveedor,
          celular : request.payload.tipo,
          nombre_papa : request.payload.inventario,
          nombre_mama : request.payload.descripcion,
          estado_civil : request.payload.estado_civil,
          nacionalidad: request.payload.nacionalidad,
          genero: request.payload.genero,
          antecedentes: request.payload.antecedentes,
          primaria: request.payload.primaria,
          secundaria: request.payload.secundaria,
          universidad: request.payload.universidad,
          experiencia_laboral: request.payload.experiencia_laboral,
          requisito_empleo: request.payload.requisito_empleo
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Empleado not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteEmpleado = {

  handler: function(request, reply){
    empleado.findOne({'_id' : request.params._id}, function(err, Empleado){
      if(err){
        return reply(boom.badRequest("Could not delete Empleado"));
      }else if(!err && Empleado){
        Empleado.remove();
        return reply('Empleado deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createEmpleado = {

  handler: function(request, reply){
    var newEmpleado = new empleado({
      nombre : request.payload.nombre,
      identificacion : request.payload.idProveedor,
      celular : request.payload.tipo,
      nombre_papa : request.payload.inventario,
      nombre_mama : request.payload.descripcion,
      estado_civil : request.payload.estado_civil,
      nacionalidad: request.payload.nacionalidad,
      genero: request.payload.genero,
      antecedentes: request.payload.antecedentes,
      primaria: request.payload.primaria,
      secundaria: request.payload.secundaria,
      universidad: request.payload.universidad,
      experiencia_laboral: request.payload.experiencia_laboral,
      requisito_empleo: request.payload.requisito_empleo
    });
    newEmpleado.save(function(err){
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
