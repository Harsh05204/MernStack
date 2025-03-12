const express = require('express');
const app = express();
const port = 3005;

app.get("/add",function(req,res){
   const a = parseInt(req.query.a);
   const b = parseInt(req.query.b);

   const sum = a+b;
   res.send(String(sum));
   
  //  res.json({
  //   answere : a+b
  // })
});
app.get("/sub",function(req,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
 
  res.json({
    answere : a-b
  })
});

app.get("/multi",function(req,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  
  res.json({
    answere : a*b
  })
  
});

app.get("/devide",function(req,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
 
if(b != 0){
  res.json({
    answere : a/b
  });
}
});

app.listen(port,function(){
    console.log(`port run on this ${port}`);
});