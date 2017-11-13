var oferta_trabajo = require('../schemas/oferta_trabajo.js');
var mongoose = require('mongoose');

exports.getOfertas_Trabajo = {

  handler: function(request, reply){
    var ofertas_trabajo = oferta_trabajo.find({});
    reply(ofertas_trabajo);
  }
}
exports.getOfertas_TrabajoId = {

  handler : function(request, reply){
    oferta_trabajo.findOne({'_id' : request.params._id}, function(err, Oferta_Trabajo){
      if(!err && Oferta_Trabajo){
        return reply(Oferta_Trabajo);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Oferta de Trabajo not found'));
      }
    });
  }
}

exports.editOferta_Trabajo = {

  handler: function(request, reply){
    oferta_trabajo.update(
      {'_id': request.params._id},
      {$set:
        {
          tipo_puesto: request.payload.tipo_puesto,
          requisitos_personales: request.payload.requisitos_personales,
          requisitos_academicos: request.payload.requisitos_academicos,
          requisitos_sanitario: request.payload.requisitos_sanitario,
          requisitos_laborales: request.payload.requisitos_laborales,
          requisitos_profesionales: request.payload.requisitos_profesionales,
          lugar_empleo: request.payload.lugar_empleo,
          sueldo: request.payload.sueldo,
          Condiciones: request.payload.Condiciones,
          vacantes: request.payload.vacantes,
          id_solicitantes: request.payload.id_solicitantes,
          id_empleador: request.payload.id_empleador
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Bebida not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteOferta_Trabajo = {

  handler: function(request, reply){
    oferta_trabajo.findOne({'_id' : request.params._id}, function(err, Oferta_Trabajo){
      if(err){
        return reply(boom.badRequest("Could not delete oferta de trabajo"));
      }else if(!err && Oferta_Trabajo){
        Oferta_Trabajo.remove();
        return reply('Oferta Trabajo deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createOferta_Trabajo = {

  handler: function(request, reply){
    var newOferta_Trabajo = new oferta_trabajo({
      tipo_puesto: request.payload.tipo_puesto,
      requisitos_personales: request.payload.requisitos_personales,
      requisitos_academicos: request.payload.requisitos_academicos,
      requisitos_sanitario: request.payload.requisitos_sanitario,
      requisitos_laborales: request.payload.requisitos_laborales,
      requisitos_profesionales: request.payload.requisitos_profesionales,
      lugar_empleo: request.payload.lugar_empleo,
      sueldo: request.payload.sueldo,
      Condiciones: request.payload.Condiciones,
      vacantes: request.payload.vacantes,
      id_solicitantes: request.payload.id_solicitantes,
      id_empleador: request.payload.id_empleador
    });
    newOferta_Trabajo.save(function(err){
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
