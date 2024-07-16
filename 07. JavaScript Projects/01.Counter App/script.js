const minusbtn=document.querySelector("#minus")
const plusbtn=document.querySelector("#plus")
const count=document.querySelector("h1")
const input=document.querySelector("input");
const rst=document.querySelector("#rst");

plusbtn.addEventListener("click",function(){
    const countVal=parseInt(count.innerText);
    const inputVal=parseInt(input.value);
    count.innerText=countVal+inputVal;
})


minusbtn.addEventListener("click",function(){
    const countVal=parseInt(count.innerText);
    const inputVal=parseInt(input.value);
    count.innerText=countVal-inputVal;
})

rst.addEventListener("click",function(){
    count.innerText=0;
})



