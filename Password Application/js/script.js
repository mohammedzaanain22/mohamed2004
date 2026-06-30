const icon = document.querySelector(".pass-wrapper i");
const pas = document.querySelector(".pass-wrapper input");

console.log(pas);
icon.onclick = ()=>{
  if( pas.type==='password'){
 pas.type = 'text';
  icon.classList.replace("fa-eye","fa-eye-slash");
  }else{
 pas.type = 'password';
  icon.classList.replace("fa-eye-slash","fa-eye");
  }
 

 
} 