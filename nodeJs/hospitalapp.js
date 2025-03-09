
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const user = [{
    Fname : "harshil",
    keydney : [{
        healthykeydney : false
    }]
}]

app.get("/",function(req,res){
     let johnkedney = user[0].keydney;
     let numberOfKedney = johnkedney.length;
     let numberofHealthyKedney = 0;

     for (let i = 0; i < johnkedney.length; i++) {
         if(johnkedney[i].healthykeydney){
              numberofHealthyKedney = numberofHealthyKedney +1;
         }
     }
     let numofunhealthyKeydney = numberOfKedney - numberofHealthyKedney;

     res.json({
        numberOfKedney,
        numberofHealthyKedney,
        numofunhealthyKeydney
     })
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].keydney.push({
        healthykeydney : isHealthy
    })

    res.json({
        msg:"done"
    })
})

app.put("/",function(req,res) {
    for(let index = 0; index < user[0].keydney.length; index++) {
         user[0].keydney[index].healthykeydney = true;
    }
    res.json({})
});

app.listen(port,function(){
    console.log(`app run on ${port} this server`);
    
});

