const express = require('express')
const route = express.Router()
const apiRoutes = require("./api")

//This is Base Url
const api = "/api/v1"
route.use(api,apiRoutes)
route.use(api,(req,res)=>res.send("Api is not found"))

module.exports = route