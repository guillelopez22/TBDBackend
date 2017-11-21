var oferta_trabajo = require('../schemas/oferta_trabajo.js');
var mongoose = require('mongoose');

exports.createOferta = {
  handler: function (request, reply){
    var oferta = new oferta_trabajo({
      tipo_puesto: request.payload.puesto,
      requisitos_personales: request.payload.personal,
      requisitos_academicos: request.payload.academicos,
      requisitos_laborales: request.payload.laborales,
      requisitos_profesionales: request.payload.profesionales,
      lugar_empleo: request.payload.lugar,
      sueldo: request.payload.sueldo,
      negociable: request.payload.negociable,
      tipo_contrato: request.payload.contrato,
      vacantes: request.payload.vacantes,
      id_solicitantes: request.payload.id_solicitantes,
      id_empleador: request.payload.id_empleador
    });

    oferta.save(function(err){
      if(!err){
        return reply({
          success: true
        })
      }else{
        return reply({
          success: false,
          err
        })
      }
    });
  }
}

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
        return reply({oferta:Oferta_Trabajo,success: true});
      }else if(!err){
        return reply({
          success: false
        });
      }else if(err){
        return reply({
          success:false
        });
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
          tipo_puesto: request.payload.puesto,
          requisitos_personales: request.payload.personal,
          requisitos_academicos: request.payload.academicos,
          requisitos_laborales: request.payload.laborales,
          requisitos_profesionales: request.payload.profesionales,
          lugar_empleo: request.payload.lugar,
          sueldo: request.payload.sueldo,
          negociable: request.payload.negociable,
          tipo_contrato: request.payload.contrato,
          vacantes: request.payload.vacantes,
          id_solicitantes: request.payload.id_solicitantes,
          id_empleador: request.payload.id_empleador
        }
      }, function(err){
        if(err){
          return reply({
            success: false
          });
        }else{
          return reply({
            success:true
          });
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
