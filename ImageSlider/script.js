const buttons = document.querySelectorAll("button")
const images = document.getElementsByTagName("li")

const next = document.getElementById("next")

function changeSlider(btn){
    if (btn.id === "next"){
        for(i = 0; i< images.length; i++){
            if(images[i].className == "active"){
                if(i == 3){
                    images[i].classList.remove("active")
                    images[i].classList.add("no-active")
                    images[i-3].classList.remove("no-active")
                    images[i-3].classList.add("active")
                    break;
                }
                images[i].classList.remove("active")
                images[i].classList.add("no-active")
                images[i+1].classList.remove("no-active")
                images[i+1].classList.add("active")
                break
            }
    }
}
    if (btn.id === "previous"){
        for(i = 0; i< images.length; i++){
            if(images[i].className == "active"){
                if(i == 0){
                    images[i].classList.remove("active")
                    images[i].classList.add("no-active")
                    images[i + 3].classList.remove("no-active")
                    images[i + 3].classList.add("active")
                    break;
                }
                images[i].classList.remove("active")
                images[i].classList.add("no-active")
                images[i-1].classList.remove("no-active")
                images[i-1].classList.add("active")
                break
            }
    }
    }
}

buttons.forEach(btn => btn.addEventListener("click", e => changeSlider(btn)))

setInterval(()=>changeSlider(next), 5000)


