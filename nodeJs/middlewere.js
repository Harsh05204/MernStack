const express = require('express');
const app = express();
const port = 3002;

function isMiddlewere(req,res,next){
  const age = req.query.age;
  if(age >= 14){
    next();
  }
  else{
    res.status(411).json({
       msg : "You will not ride this your age is not enough"
    })
  }
}

app.get("/ride1",isMiddlewere,function(req,res){
  res.status(200).json({
    msg : "Your are eligible for ride1"
  });
});

app.get("/ride2",isMiddlewere,function(req,res){
  res.status(200).json({
    msg : "Your are eligible for ride2"
  });
});

app.listen(port);