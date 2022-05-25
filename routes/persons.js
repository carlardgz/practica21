const express = require("express");
const router = express.Router();
const mongoose = require("../node_modules/mongoose");
let Person = require("../models/person");

router.get("/persons", function (req, res, next) {
  Person.find(function (err, persons) {
    if (err) return next(err);
    //res.json(persons);
    res.render("personsTable", { persons });
  });
});

//ruta para mostrar el formulario
router.get("/person", function (req, res) {
  res.render("person");
});

//ruta para mostrar la página principal
router.get("/main", function (req, res) {
  res.render("main");
});

//agregar nuevo documento a la colección
//ruta para atender la petición del formulario
router.post("/addPerson", function (req, res) {
  const myPerson = new Person({
    nombre: req.body.nombre,
    edad: req.body.edad,
    tipoSangre: req.body.tipoSangre,
    nss: req.body.nss,
  }); //crear la entidad
  myPerson.save(); //guardar en la base de datos
});

module.exports = router;
