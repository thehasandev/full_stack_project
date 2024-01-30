const express = require('express')
const dbConfiger = require('./dbConfig/dbConfiger')
const cors = require('cors')
const app = express()
const routes = require("./routes")

const { registrarionControlar } = require('./controlers/aouthControllers')


//Middleware
app.use(express.json())
app.use(cors())

dbConfiger()

app.use(routes)


app.listen(8000,()=>{
    console.log("Port is connected");
})