let promise1 = new Promise((resolve,reject)=>{
     let prom = false;
    
     if (prom) {
       resolve("promise fullfiled");
     }
     else{
      reject("error is occur");
     }
});

promise1.then((massage)=>{
   console.log("Massage in promise is ",massage);   
}).catch((error)=>{
    console.log("error in massage is ",error);
});

