console.log("Harsh Patel");
async function data(){
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json()
  console.log(data); 
}
async function showdata(params) {
  await params();
  
}

showdata(data);

