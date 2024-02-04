const mongoose = require('mongoose');

const dbConfiger =()=>{

mongoose.connect('mongodb+srv://hosen:eIQsM3LHEBBzE3I5@cluster0.px58yxr.mongodb.net/ecommerce?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));
}

module.exports = dbConfiger
// 0z7GbJ04BtOgHOjl
