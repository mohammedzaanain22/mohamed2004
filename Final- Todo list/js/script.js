const btn = document.querySelector(".btn");
const input = document.querySelector("#input-text");
const list = document.querySelector(".task-list");
function addTask(){
    let taskinput = input.value ;
    if(!taskinput){
        alert("رجاء كتابة مهام ");
    }else{
        let li = document.createElement("li");
        let span = document.createElement("span");
         li.innerHTML = taskinput ;
         list.appendChild(li);
         span.innerHTML = "&times;";
         li.appendChild(span);
         input.value="";
    }
            input.value="";
            setTask();

}

btn.addEventListener("click" ,addTask ) ;

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
                    setTask();

    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
                    setTask();


    }
        
});
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
})
function setTask(){
    localStorage.setItem("lists" ,list.innerHTML );
}
function loadTask(){
    list.innerHTML = localStorage.getItem("lists");
}
loadTask();