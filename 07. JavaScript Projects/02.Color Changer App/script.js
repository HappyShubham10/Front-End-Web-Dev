const btn=document.querySelectorAll(".button");
const bdy=document.querySelector("body");


btn.forEach(function(elem){
    elem.addEventListener("click", function(e){
    if(e.target.id === "grey")
    {
        bdy.style.backgroundColor="grey";
    }
    else if(e.target.id === "white")
    {
        bdy.style.backgroundColor="white";
    }
    else if(e.target.id === "blue")
    {
        bdy.style.backgroundColor="blue";
    }
    else
    {
        bdy.style.backgroundColor="yellow";
    }
});
});