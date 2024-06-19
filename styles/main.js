const ham = document.querySelector(".hamburger")
let links = document.querySelectorAll("a")
const body = document.body



ham.onclick = function(){
  ham.classList.toggle("rotate")
  body.classList.toggle("show")
}
links.forEach(link =>{
  link.addEventListener("click", ()=>{
    body.classList.remove("show")
    ham.classList.remove("rotate")
  })
})


