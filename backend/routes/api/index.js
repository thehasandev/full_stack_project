const express = require('express')
const route = express.Router()
const aouthRoutes = require("./aouthRoutes")

route.use("/aouthRoutes",aouthRoutes)
 

module.exports = route