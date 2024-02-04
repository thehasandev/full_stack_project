const mongoose = require('mongoose');

const dbConfiger =()=>{
const username = process.DATABAS_NAME
const password = process.USER_PASSWORD
const database = process.DATABASE_NAME
mongoose.connect('mongodb+srv://hasan:6dToV68cOr0jSzKn@cluster0.px58yxr.mongodb.net/mern-2204?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));
}

module.exports = dbConfiger

