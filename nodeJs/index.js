const express = require('express');
const app = express();
const port = 3000;

app.get("/",function(req,res){
  res.send("response send by get method");
});

app.get("/backend-api/converstion",function(req,res){
  res.send("send Chat gpt post method");
});

app.listen(port,()=>{
  console.log(`port start on ${port}`);
});