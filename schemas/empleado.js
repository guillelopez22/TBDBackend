var mongoose = require('mongoose');

var EmpleadoSchema = new mongoose.Schema({
  nombre : String,
  identificacion: String,
  celular: Number,
  nombre_papa: String,
  nombre_mama: String,
  estado_civil: String,
  nacionalidad: String,
  genero: String,
  antecedentes: String,
  primaria: [String],
  secundaria: [String],
  universidad: [String],
  experiencia_laboral: [String],
  requisito_empleo: [String]
});

module.exports = mongoose.model('empleado', EmpleadoSchema);
