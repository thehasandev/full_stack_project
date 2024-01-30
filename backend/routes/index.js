const express = require('express')
const route = express.Router()
const apiRoutes = require("./api")

const api = "/api/v1"
route.use(api,apiRoutes)
 

module.exports = route