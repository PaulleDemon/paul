const header = document.getElementById("header")
const menuBtn = document.getElementById("menu-icon")

const headerLinks = document.getElementsByClassName("header-links")

const sections = document.getElementsByClassName("section") // helps in scrolling to specific sections


let hidden = window.screen.width > 600 // hide menu-btn if greater than 800px

if (hidden){
    menuBtn.classList.add("hidden")
}

console.log("Menu: ", menuBtn)
menuBtn.addEventListener("click", () => {

    console.log("Clicked", hidden)
    if (!hidden){
        hidden = true
        header.classList.add("hidden")
        console.log("yaa", hidden)

    }else{
        console.log("hidd")
        hidden = false
        header.classList.remove("hidden")
    }


})

let current = ''

window.onscroll = (e) => {
    
    for (const sec of sections){

        const sectionTop = sec.offsetTop

        if (scrollY > sectionTop - 200 ) {
            current = sec.getAttribute("id"); 
        }

        for (const x of headerLinks){
            x.classList.remove("active-header-link")

            if (x.classList.contains(current)){
                x.classList.add("active-header-link")
            }
        }
        
        if(document.getElementsByClassName("active-header-link").length === 0) {
            // set defaults
            headerLinks[0].classList.add("active-header-link")
        }
    }

   

}


window.addEventListener("resize", (e) => {

    if (window.screen.width < 600 ){
        menuBtn.classList.remove("hidden")
        hidden = false
    }
    else{
        menuBtn.classList.add("hidden")
        hidden = true
    }

})

