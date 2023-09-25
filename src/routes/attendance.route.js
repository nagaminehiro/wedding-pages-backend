const express = require("express");
const attendanceRouter = express.Router();
const { v4 } = require('uuid');
const AttendanceCollection = require("../schemas/attendance.schemas");

// Rota GET para a página inicial
attendanceRouter.get("/", async (req, res) => {
    const attendances = await AttendanceCollection.find();
    res.json(attendances);
});

// Rota GET para uma página de perfil
attendanceRouter.post("/", async (req, res) => {
    const attendance = new AttendanceCollection({
        id: v4(),
        name: req.body.name,
        confirm: req.body.confirm,
        phone: req.body.phone,
        email: req.body.email,
        quantityCompanion: req.body.quantityCompanion,
        companion: req.body.companion
    })

    attendance.save()
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            console.log(err)
            res.status(500).send("Error ao salvar")
        })
});

module.exports = attendanceRouter;
