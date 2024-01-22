const express = require('express')
const dbConfiger = require('./dbConfig/dbConfiger')

dbConfiger()
const app = express()
const cors = require('cors')

//Middleware
app.use(express.json())
app.use(cors())

app.post('/create', function (req, res) {
  console.log(req.body)
  res.send(req.body)
})


app.listen(8000,()=>{
    console.log("Port is connected");
})