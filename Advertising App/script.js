const times = document.getElementById("times") ;
const close = document.getElementById("close");
const adv = document.getElementById("adv");
setInterval(
    function(){
      times.innerHTML = times.innerHTML-1;
      if(Number( times.innerHTML) ==0){
        times.style.display ="none" ;
        close.style.display = "block"
      }
    }
    , 
    1000 
) ;
close.onclick = function(){
adv.style.display = "none" ;
};