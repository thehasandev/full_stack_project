const express = require('express')
const dbConfiger = require('./dbConfig/dbConfiger')

const app = express()
const cors = require('cors')
const { registrarionControlar } = require('./controlers/registrarionControlar')

dbConfiger()

//Middleware
app.use(express.json())
app.use(cors())

app.post('/create',registrarionControlar)


app.listen(8000,()=>{
    console.log("Port is connected");
})