const arr  = ["el1","el2","el3"]
arr.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
let salary = prompt("Please enter your salary");
if(salary > 5000){
  console.log('uechveli kushi vici')
}
else if(salary > 1500){
  console.log('not bad')
}
else{
  console.log(':)')
}
const nums  = [15,53,22,198,10,28,16,70,33,951]
nums.forEach((item, index) => {
  if(item%2!==0){
  console.log(`${index}: ${item}`);
  }
});