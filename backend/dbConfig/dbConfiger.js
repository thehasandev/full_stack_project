const mongoose = require('mongoose');

const dbConfiger =()=>{

mongoose.connect('mongodb+srv://Hasan:aUiWkt200HTHMIND@cluster0.px58yxr.mongodb.net/data?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));
}

module.exports = dbConfiger
// 
