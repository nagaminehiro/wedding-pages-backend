const startMongoose = require("./mongoose");

async function initConfigs() {
    console.log("Configurando Mongoose");
    await startMongoose();
    console.log("Mongoose configurado com sucesso");
}

module.exports = initConfigs;