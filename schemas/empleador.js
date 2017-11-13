var mongoose = require('mongoose');

var EmpleadorSchema = new mongoose.Schema({
  nombre_empresa: String,
  rtn: String,
  ceo: String,
  direccion : String,
  telefono: String
});

module.exports = mongoose.model('empleador', EmpleadorSchema);
