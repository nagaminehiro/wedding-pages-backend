const mongoose = require('mongoose');

// Defina o esquema do usuário
const attendanceSchema = new mongoose.Schema({
  id: String,
  name: String,
  confirm: Boolean,
  phone: String,
  email: String,
  quantityCompanion: Number,
  companion: [{
    type: String
  }]
});

// Crie o modelo do usuário
const AttendanceCollection = mongoose.model('attendance', attendanceSchema);
module.exports = AttendanceCollection;