const form=document.querySelector("form")
const output=document.querySelector("#output")
let bmi

function check(bmi)
{
    if(bmi < 18.6)
    {
        output.innerHTML=`<span>Underweight</span>`;
    }
    else if (bmi > 18.6  && bmi < 24.9 )
    {
        output.innerHTML=`<span>Normalweight</span>`;
    }
    else
    {
        output.innerHTML=`<span>Overweight</span>`;
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    const weight=parseInt(document.querySelector("#weight").value);
    const height=parseInt(document.querySelector("#height").value);
    const result=document.querySelector("#result");
    
    
    if(height === "" || height < 0 || isNaN(height)){
        result.innerText=`please give a valid height ${height}`
    }
    else if (weight === "" || weight < 0 || isNaN(weight)){
        result.innerText=`please give a valid weight ${weight}`
    }
    else
    {
        bmi = ([weight/(height*height)]*(10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`
        result.style.marginTop="2rem"
    }
    check(bmi);
})


