# Javascript

<div align="left">
  <i>Shubham Sharma Notes</i>
</div>

## Lecture 1:
- Getting confidence in software development is very important
- Doing project will only gives you the confidence
- Confidence will only clear up the interviews
- No extra tool required to setup to learn 
  javascript

<hr/>
<br/>

## Lecture 2: Setting up local environment
- Javascript execution is same for browser or running on any environment
- Every source code has meaning in javascript, like console.log() has some meaning in javascript, it is syntax in programming language
- Every programming language comes with some extenstion like .js, .py
- Every software has capability to understand the syntax whether it is .js or .py, which we call interpretor or compiler
- The compiler / interpretor was hidden in browser but now taken out in nodejs enviroment
- Now we no need to write, index.html and create the seaprate js file and add in script, as it was attached with broweser.
- Now we can run javascript directly with node environment, Hence Javascript is used everywhere like in frontend, backend etc
- Install the nodejs from nodejs.org and run in the local machine
- For writing the code use, VS Code, as it very popular now a days, it is from microsoft
- VS Code will help in color correction, indentation etc
- Go to view ➜ terminal, here you can see the terminal
- Check whether node is installed or not: node -v, our work done, if we get some number like 18, then we are ok
- To execute the code, we use: node filename
<hr/>
<br/>

## Lecture 3: Github
- We have lot of online code execution environment available like Github.
- Lets see, how can we setup the code environment in Github,
- Go to Github and create the account
- Create new repository ➜ code-with-javascript-one
- Create the **README.md** and create the repository

<hr/>
<br/>

## Lecture 4: Variables & Constants

![Var](/06.%20JavaScript/images/variables.jpg)

- Only people will survive in the Tech indutry whos motive is to create something product
- Through javascript, we can create, mobile app, web app etc
- Set goal to create Ecommerce app or social media app
- All game is about mindset, here mideset to create a sample product
- Think to create a ecomerce app
- I need to attract user and make him into register
- Given him/her unique id
- When user comes ➜ he enter the details like name, city, etc, it needs to store ➜ it    
  stored in memory space, here it is varaible later DB 
- Here, all the game is about, storing the data and retriving it
- So we learn variable and constants
- variable can be change but constant is constant
- We will learn about investigation
- We should the name that is easily readable
- When we see the var, let, const, it means, we need to assign in memory
- Const means, we cant change the value, it will through an error, if we try to change 
  the constant value
- To write a comment, we use // 2 slashes, it means, javascript cant execute this lines
- We can print multiple values in console.log([]) like this by separting commas
- In js, let and const and be done using let and const
- In js, there was a problem of scope, means anything written in {}
- In js, when some programmer change the value in scope, it will impact the existing 
  varaible
- So in modern js, we use let, const to overcome the issue of block scope and function   
  scope
- /* */ this is also way of comment
- We can reserve the variable without using anykeyword as well, but it is not good 
  practice
- In js, semicolon is optional
- Defualt value of let is undefined

<hr/>
<br/>


## Lecture 5: Datatypes

- Prefer to practice on keyboard rather then taking notes on paper, write notes here 
  itself so to remember
- **"use strict"** if we use above 2 words, it means it is newer version of javascript
- alert("hello") if we run the code, it ll given an error saying node is not defined, as 
  js engine is hidden in browser ➜ it means, to run alert() has different way ti run it.
- In coding readability is very important ans it should be future proof For   
  documentation prfer mdn (mozilla documentation)
- Original documenataion would be find in tc39.es
- ECMA Script is the standard way of writing javscript
- **For Example:**  if we write loop, then we should write in this way etc
- In js , we have different datatype,
- Primitive Datatype:
- Like number, string, boolean, null, undefined, bigInt, symbol
- Prefer to use double quotes for string datatype
- Boolean will say yes or no, it has only 2 values
- null ➜ it is standalone value, yes it is datatype as well
- null is representaiton of empty value
- null means value is empty, example, like giving empty value while monitoring the temp, 
  as we cant give 0, as 0 has some value in temp scale
- undefined ➜ means some value is not defined
- Symbol datatype is used to fincdout the uniquness ➜ it is used in react, to find the 
  component
- typeof ➜ to know the type of any variable, we use typeof
- **Example:**
  ```javascript
  console.log(typeof "Shubham") ➜ string

<hr/>
<br/>

## Lecture 6: Conversion Operation

![DOM](/06.%20JavaScript/images/type-conversion.png)

- We dont in javascript, what type of value we get, so we need to use conversion of   
  datatype
- We can write typeof in 2 ways
  - typeof variablename
  - typeof(variableName)
- To convert string into Number, we use Number(variableName);
- When value is not proper number like 33abc, its type is NaN
- In Javascript, there is no strict check, so we use typescript
- Conversion of null into number is 0
- Conversion of undefined into number is NaN
- Conversion of boolean into number is false
- Conversion of string into number is NaN, as it is not able to convert into number
- **Number conversion summary:**
  ```javascript
  "33" => 33
  "33abc" => NaN
   true => 1; false =>0
- It is very important to know, is the value is converted and know what value it gives 
  us back.
- Conversion of 1 gives true
- Conversion of "" emty string gives false;
- **Boolean conversion summary:**
  ```javascript
  1 => true, 0=> false
  "" => false
  "Shubham" => true

<hr/>
<br/>

## Lecture 7: Operations

- if string is 1st then all conversion will into string
- **Example:** ```javascript console.log("1"+2+2) ➜ 122```
- If the string is last then conversion will be done before that then string will be 
  added
- **Example:**
  ```javascript
  console.log(1+2+"2") ➜ 32
- Should know about more about convertion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

<hr/>
<br/>

## Lecture 8: Comparisons

- Comparison shouild be done with same datatype only
- Here console.log("2" >1) will be converted into 2>1 condition, here the auto 
  conversion happens
- While comparion null is converted into 0 or NaN, example console.log(null > 0), means 
  0 > 0, hence answer is false. So avoid only value check but use value with datatype check.
- Comparison with undefined with 0 is always false, example: console.log(undefined == 
  0); it gives false
- In Javascript, comparison and equality check both work differently
- **==== Strict check:** it will check value as well as data type

<hr/>
<br/>

## Lecture 9: Datatype summary

- Datatype is basically into 2 types
  - Primitive
  - Non-primitive
- Difference between is call by value and call by reference, it means how we are saving 
  the data into memory and how we are accessing the data
- **Primitive Datatype:**
  - Primitive is into 7 categories
  - Prmitive datatype is call by value
  - when we take the data, it is copied, so the changes are done on copied data
  - String, Number, Boolean, null (meam empty), undefined, Symbol (to make the value unique), BigInt
- **Non-Primitive Datatype:**
  - It is also called as reference type
  - we can get the reference of the available data
  - Array, Objects, Functions

- **To master the javascript:** Learn Objects and browser events

- JavaScript is a dynamically typed language, which means that data types of variables 
  are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
- For big integer number, we add n at the end of the number.
- Object is declared with curly brases
- Datatype of function is called object function
- **Reference Documentation link:** https://262.ecma-international.org/5.1/#sec-11.4.3

<hr/>
<br/>

## Lecture 10: Stack and Heap Memory

![DOM](/06.%20JavaScript/images/stack-heap.jpg)

![DOM](/06.%20JavaScript/images/stack.JPG)

- Memory is of 2 types 1. Stack 2. Heap Memory
- Stack memory is used for primitiva datatype while heap memory is used for non 
  primitive datatype
- we will get original value reference when take back the value from reference value
- Whatever goes in heap, we only get the reference, means whatever changes we are doing, 
  we are doing in original value
- From stack, we get the copy of the value

<hr/>
<br/>
