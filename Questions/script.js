const accordionitem = document.querySelectorAll(".accordion-item") ;

accordionitem.forEach((item)=>{
  const content = item.querySelector(".accordion-content");
  const heade = item.querySelector(".accordion-header");
    const tooglebtn = item.querySelector(".toggle-icon");
    heade.addEventListener("click" , ()=>{
        const isOpen = content.classList.contains("active");

      accordionitem.forEach((i) => {
    i.querySelector(".accordion-content").classList.remove("active");
      i.querySelector(".toggle-icon").innerHTML = "+";
});

       if (!isOpen) {
            content.classList.add("active");
            tooglebtn.innerHTML = "-";
        }
      
    })

})