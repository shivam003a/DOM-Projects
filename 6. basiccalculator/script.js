const result = document.querySelector(".result-no")
const num1 = document.querySelector(".i-1")
const num2 = document.querySelector(".i-2")
const op = document.querySelector(".label-op")
const calc = document.querySelector(".btn-submit")
const reset = document.querySelector(".btn-reset")


const calculate = ()=>{
    const val1 = parseInt(num1.value);
    const val2 = parseInt(num2.value);

    const operator = op.value

    if(isNaN(val1) || isNaN(val2) || !operator){
        console.log("invalid op")
    }else{
        if(operator==="add") return val1+val2;
        else if(operator==="minus") return val1-val2;
        else if(operator==="multiply") return val1*val2;
        else if(operator==="divide") return val1/val2;
    }
}

const resetInput = ()=>{
    result.innerText = ""
    num1.value = "";
    num2.value = "";

    op.value = "undefined"
}

calc.addEventListener('click', (e)=>{
    let ans = calculate()
    result.innerText = ans;
})

reset.addEventListener('click', ()=>{
    resetInput()
})