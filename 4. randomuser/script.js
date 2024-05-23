const progress = document.querySelector(".progress")
const gtnUser = document.querySelector(".gtn-user")
const navBtn = document.querySelectorAll(".nav-btn")


const getUser = async()=>{
    try{
        const res = await fetch("https://randomuser.me/api/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        
        const data = await res.json();
        console.log(data)
        setDetails(data)
    }catch(e){
        console.log(e.message)
    }
}

getUser()

const setDetails = (data)=>{
    const name = `${data.results[0].name.first} ${data.results[0].name.last}`
    const mail = `${data.results[0].email}`
    const phone = `${data.results[0].phone}`
    const img = `${data.results[0].picture.thumbnail}`
    const add = `${data.results[0].location.city}, ${data.results[0].location.country}`

    document.querySelector(".name").innerText = name;
    document.querySelector(".mail").innerText = mail;
    document.querySelector(".phone").innerText = phone;
    document.querySelector(".add").innerText = add;
    document.querySelector(".user-img").setAttribute("src", img);
}

const displaySelectedDetails = (name, mail, phone, user)=>{
    document.querySelector(".info-name").style.display = name;
    document.querySelector(".info-mail").style.display = mail;
    document.querySelector(".info-phone").style.display = phone;
    document.querySelector(".info-add").style.display = user;
}

navBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const classList = btn.classList

        if(classList.contains("user-svg")){
            displaySelectedDetails("flex", "none", "none", "none")
        }
        else if(classList.contains("email-svg")){
            displaySelectedDetails("none", "flex", "none", "none")
        }
        else if(classList.contains("phone-svg")){
            displaySelectedDetails("none", "none", "flex", "none")
        }
        else if(classList.contains("map-svg")){
            displaySelectedDetails("none", "none", "none", "flex")
        }
    })
})



setTimeout(()=>{
    progress.style.display = "none"
}, 2500)

gtnUser.addEventListener('click', ()=>{
    getUser()
})