const express=require('express');
const mysql=require("mysql");
const cors = require('cors');
const dotenv = require('dotenv');

const app=express();
dotenv.config({ path : './.env'});

app.use(express.json());
app.use(cors());
const db=mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'pfa'

});
db.connect((error)=>{
         if(error){
                 console.log('Error');
         } else {
                 console.log('MYSQL is Connected');   
         }
});
app.post("/register",(req,res)=>{
    console.log(req.body);
    const selectValue=req.body.selectValue
    const username =req.body.username
    const password=req.body.password

    db.query("INSERT INTO user (status,email,password) VALUES (?,?,?)",[selectValue,username,password],(err,result)=>{
        console.log(err);
    });
})
app.listen(3001,()=>{
    console.log("running on 3001");
});
