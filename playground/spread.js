// function add (a,b) {
//   return a + b;
// }
// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = [
//   'Henry',
//   'Tory'
// ]
// var groupB = [
//   'Ebuka'
// ];
// var final = [3,...groupA,...groupB]
// console.log(final);
var person = ['Andrew',25];
var person2 = ['Jen',29];
function greet(name,age) {
  return `Hi, ${name} you are ${age}`;
}
console.log(greet(...person));
console.log(greet(...person2));
names = ['Henry','Ebuka'];
final = ['Chukxy',...names];
final.forEach((name) => {
  console.log(`Hello ${name}`);
});
