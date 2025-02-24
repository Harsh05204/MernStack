// let arr = [10,20,30,40,50,12,2,555,33];

// let min = arr[0];
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]< min){
//       min = arr[index];
//     }
// }
// console.log(min);

function saymyname(){
   console.log("hello my name is harsh");
}
setTimeout(saymyname,5000);
console.log("harsh");


function sum(num1, num2) {
  let result = num1 + num2;
  return displayResult(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}
function greet(){
  console.log("Hello world");
}

setTimeout(greet,5*1000);
// setInterval(greet,5*1000);


// sum(1,3);
// console.log(ans);

// You are only allowed to call one function after this
// How will you displayResult of a sum