const mongoose = require('mongoose');

// Defina o esquema do usuário
const messageSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  message: String,
  author: String,
  email: String
});

// Crie o modelo do usuário
const MessageCollection = mongoose.model('message', messageSchema);
module.exports = MessageCollection;