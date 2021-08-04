const express=require('express');
const app = express();
const port=5000;
const db=require('./config/mongoose');

app.use(express.urlencoded());
app.use(express.json());
app.use('/',require('./router'));
app.listen(port,(err)=>{
    if(err)
    {
        console.log(`Thre is some error : ${err}`);
    }
    else
    {
        console.log(`Server is running at port : ${port}`);
    }
})






