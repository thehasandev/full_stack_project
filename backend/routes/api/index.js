const express = require('express')
const route = express.Router()
const aouthRoutes = require("./aouthRoutes")

route.use("/aouth",aouthRoutes)
 

module.exports = route