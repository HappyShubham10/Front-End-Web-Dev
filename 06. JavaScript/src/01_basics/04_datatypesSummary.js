//primitive
//7 types number,string,null,undefined bigInt boolean symbol

let number1=100;
let number2=100.34;
let name="Shubham";
let tempvalue=null;

let bigInt=233455789900655444444332222222n

let smbol1=Symbol("1243");
let smbol2=Symbol("1234");

console.log(smbol1 == smbol2);
console.log(typeof tempvalue);


//Non primitive Reference typed
//arrays ,objects, functions

let heros=["spiderman","ironman", "thor"];

let myobj={
    name:"shubham",
    age:24,
    city:"Delhi"
}

console.log(typeof myobj)

//stack memory (primitive data types makes copy)
//heap memory (Non primitive data types makes reference)

let myname="sharma";
let anothername=myname;

anothername="lala";

console.log(myname);
console.log(anothername);

let userone={
    email:"lala@gmail.com",
    age:25
}

let usertwo=userone;
usertwo.email="abhay@gmail.com"

console.log(userone.email)
console.log(usertwo.email)