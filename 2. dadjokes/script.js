const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

let intervalId;
const startInterval = ()=>{
    intervalId = setInterval(()=>{ getJokes() }, 10000)
}


const getJokes = async()=>{
    btn.setAttribute("disabled", "disabled")
    try{
        const res = await fetch('https://icanhazdadjoke.com/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        const data = await res.json();
        joke.innerHTML = data.joke
    }catch(e){
        joke.innerHTML = "Error getting jokes";
    }finally{
        btn.removeAttribute("disabled")
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    getJokes();
    startInterval();
})

btn.addEventListener('click', async()=>{
    clearInterval(intervalId);
    await getJokes()
    startInterval()
})