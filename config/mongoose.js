const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/nodejsproject',{ useUnifiedTopology: true ,useNewUrlParser: true }).then(console.log(`Connected to db`)).catch(`There is some error in connecting to db`);

const db=mongoose.connection;
module.exports=db;