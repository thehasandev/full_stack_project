const mongoose = require('mongoose');

const dbConfiger =()=>{
    
mongoose.connect('mongodb+srv://Nirob:zkTUmzMcWvlBV2Jk@cluster0.px58yxr.mongodb.net/ecommerce?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));

}

module.exports = dbConfiger
