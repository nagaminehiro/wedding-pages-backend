const dotenv = require('dotenv');
dotenv.config(); // Carrega as variáveis de ambiente

const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(helmet());

// CORS Configuration
const allowedOrigins = ['http://localhost:4200']; // Adicione suas origens permitidas aqui
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

// Conexão com o banco de dados MongoDB
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DOMAIN_MONGO, mongooseOptions)
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso');
  })
  .catch((err) => {
    console.error('Erro na conexão com o MongoDB:', err);
  });

// Rotas
app.get('/', (req, res) => {
  res.send('Bem-vindo à sua API Node.js com Express e Mongoose');
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
