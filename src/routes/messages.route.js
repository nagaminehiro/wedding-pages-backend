const express = require("express");
const messageRouter = express.Router();
const { v4 } = require('uuid');
const MessageCollection = require("../schemas/message.schemas");

// Rota GET para a página inicial
messageRouter.get("/", async (req, res) => {
    const messages = await MessageCollection.find();
    res.json(messages);
});

// Rota GET para uma página de perfil
messageRouter.post("/", async (req, res) => {
    const message = new MessageCollection({
        id: v4(),
        message: req.body.message,
        author: req.body.author,
        email: req.body.email
    })

    message.save()
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            console.log(err)
            res.status(500).send("Error ao salvar")
        })    
});

module.exports = messageRouter;
