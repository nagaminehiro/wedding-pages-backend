const mongoose = require('mongoose');

async function startMongoose() {
    return new Promise((resolve, reject) => {
        const mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          };
        
          mongoose
            .connect("mongodb+srv://manager_1:I9s19m22n23n23@nagamineco.7hirtyp.mongodb.net/", mongooseOptions)
            .then(() => resolve(true))
            .catch((error) => {
                console.log(error);
                throw new Error("Comunicação com o mongoDB não estabelecida");
            });
    })  
}

module.exports = startMongoose;
