const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentapi',{ useNewUrlParser: true , useUnifiedTopology: true,  useCreateIndex: true}).then(()=>{
    console.log('connection is set up ');
}).catch((err)=>
{
    console.log(err);
});