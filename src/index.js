const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const initConfigs = require('./configs/init');
const getCorsOptions = require('./configs/cors');
const messageRouter = require('./routes/messages.route');
const attendanceRouter = require('./routes/attendance.route');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(helmet());

app.use(cors(getCorsOptions()));

// Conexão com o banco de dados MongoDB

initConfigs();

// Rotas
app.use('/message', messageRouter);
app.use('/attendance', attendanceRouter);

// Inicie o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
