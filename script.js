const allbutton = document.querySelectorAll(".allbutton button");
const allcards = document.querySelectorAll(".allcards .card");

allbutton.forEach((btn) =>{
btn.addEventListener("click" , ()=>{
  allbutton.forEach((e)=>{
    e.classList.remove("active");
  })
btn.classList.add("active");
  const category = btn.getAttribute("data-name") ;
  allcards.forEach((item)=>{
    if(category==="all" || category=== item.getAttribute("data-name")){
      item.style.display ="grid";
    }else{
            item.style.display ="none";

    }

  }
)
} )
}
)