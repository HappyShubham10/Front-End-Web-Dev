const score=400;

const num=new Number(100000000);

console.log(score)
console.log(num.toString());
console.log(num.toFixed(4));
console.log(num.toLocaleString("en-IN"));

const othernum=125.479;


//Maths

console.log(Math.abs(-4));
console.log(Math.pow(2,3));
console.log(Math.floor(4.89));
console.log(Math.ceil(4.89));
console.log(Math.round(3.51));
console.log(Math.max(2,3,4,5));
console.log(Math.min(1,2,3,4,5));


console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) + 1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)) + min);
