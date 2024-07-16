let myDate=new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());


let createdDate=new Date(2024,0,20);
let createdDate2=new Date(2024,0,20,5,4);
let createdDate3=new Date("2024-01-23");
let createdDate4=new Date("02-24-2024");
console.log(createdDate4.toLocaleString());

let newDate=Date.now();
console.log(newDate);
console.log(Math.floor(newDate/1000));// time in seconds

let dt=new Date();
console.log(dt.getMonth());
console.log(dt.getFullYear());
console.log(dt.getDay());