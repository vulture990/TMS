const express=require('express');
const mysql=require("mysql");

const app=express();
app.use(express.json());
const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"pfadatabase"

});
app.post("/register",(req,res)=>{
    const status=req.body.status
    const email=req.body.username
    const password=req.body.password
    db.query("INSERT INTO users (Status,Email,Password) VALUES (?,?,?)",[status,email,password]);

})
app.listen(3001,()=>{
    console.log("running on 3301");
});
