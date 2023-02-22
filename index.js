const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send("this is Home page");
    res.end();
});
app.get('/about',(req,res)=>{
    res.send("this is About page");
    res.end();
});
app.get('/contact',(req,res)=>{
    res.send("this is Contact page");
    res.end();
});
app.listen(4000);