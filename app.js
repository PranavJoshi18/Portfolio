const hamburger = document.querySelector(".hamburger")
const closeId = document.querySelector(".close")
const options = document.querySelector(".options")
hamburger.addEventListener("click",()=> {
    options.classList.add("show-options")
    hamburger.classList.add("hide")
    closeId.classList.add("close-add")
})
closeId.addEventListener("click",()=> {
    closeId.classList.remove("close-add")
    options.classList.remove("show-options")
    hamburger.classList.remove("hide")
})
options.addEventListener("click",()=>{
    closeId.classList.remove("close-add")
    options.classList.remove("show-options")
    hamburger.classList.remove("hide")
})
const title = ['Frontend Developer','Data Analyst','Data Scientist','Coding Enthusiast']
const titleId = document.querySelector(".p2")
let i=0
let j=1
update()
function update() {
    titleId.innerText = title[i].slice(0,j)
    if (j==title[i].length) {
        i++
        j=0
    }
    j++
    if (i==title.length) {
        i=0
        j=1
    }
    setTimeout(update,300)
}