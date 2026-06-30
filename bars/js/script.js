const navbar = document.querySelector(".nav") ; 
const bars = document.querySelector(".fa-bars") ; 
const xmark = document.querySelector(".fa-xmark") ; 
const Mobile = document.querySelector(".Mobile") ; 
Mobile.addEventListener("click" , ()=>{
  bars.classList.toggle("active");
    xmark.classList.toggle("active");
      navbar.classList.toggle("active");

})

