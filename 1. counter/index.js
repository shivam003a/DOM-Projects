const btns = document.querySelectorAll(".btns")
const input = document.querySelector(".input")

let value = 0;

btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{

        value = Number(input.innerText)
        let classList = btn.classList;
        if(classList.contains('increment')){
            value++;
        }
        else if(classList.contains('decrement')){
            value--;
        }
        else{
            value = 0;
        }

        if (value < 0){
            input.style.color = "red";
        }
        else if (value > 0){
            input.style.color = "green"
        }
        else{
            input.style.color = "black"
        }

        input.innerText = value
    })

})

// increment.addEventListener('click', (e) => {
//     value = Number(input.innerText);
//     value++;

//     if (value < 0) input.style.color = "red";
//     else if (value > 0) input.style.color = "green"
//     else input.style.color = "black"

//     input.innerText = value
// })

// decrement.addEventListener('click', (e) => {
//     value = Number(input.innerText);
//     value--;

//     if (value < 0) input.style.color = "red";
//     else if (value > 0) input.style.color = "green"
//     else input.style.color = "black"

//     input.innerText = value
// })

// reset.addEventListener('click', (e) => {
//     value = 0;

//     if (value < 0) input.style.color = "red";
//     else if (value > 0) input.style.color = "green"
//     else input.style.color = "black"

//     input.innerText = value
// })