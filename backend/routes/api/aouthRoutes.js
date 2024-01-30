const express = require('express')
const { registrarionControlar } = require('../../controlers/aouthControllers')
const route = express.Router()

route.post("/ragestration",registrarionControlar)
 

module.exports = route