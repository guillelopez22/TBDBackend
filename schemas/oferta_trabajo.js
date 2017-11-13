var mongoose = require('mongoose');

var Oferta_TrabajoSchema = new mongoose.Schema({
  tipo_puesto: String,
  requisitos_personales: [String],
  requisitos_academicos: [String],
  requisitos_sanitario: String,
  requisitos_laborales: [String],
  requisitos_profesionales: [String],
  lugar_empleo: String,
  sueldo: Number,
  Condiciones: [String],
  vacantes: Number,
  id_solicitantes: [String],
  id_empleador: String
});

module.exports = mongoose.model('oferta_trabajo', Oferta_TrabajoSchema);
