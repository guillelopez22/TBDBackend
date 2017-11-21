var mongoose = require('mongoose');

var EmpleadoSchema = new mongoose.Schema({
  nombre : String,
  identificacion: {type: String, unique: true, required: true},
  nombre_papa: String,
  nombre_mama: String,
  estado_civil: String,
  nacionalidad: String,
  genero: String,
  primaria_promedio: String,
  primaria_centro: String,
  secundaria_promedio: String,
  secundaria_centro: String,
  secundaria_carrera: String,
  universidad_promedio: String,
  universidad_centro: String,
  universidad_carrera: String,
  experiencia_laboral: [{
    nombreEmpresa: String,
    meses: String,
    puesto: String
  }],
  salario_aspirado: String,
  tipo_contrato: String,
  puesto_a_buscar: String,
  password: String,
  scope: String,
  ofertas_aplicadas: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('empleado', EmpleadoSchema);
