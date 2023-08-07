const divBtn = document.getElementById("container");
const btn = document.getElementById("btn");


btn.addEventListener("click", ()=>{
    alert("hola!");
    event.stopPropagation();    
})

divBtn.addEventListener("click", ()=>{
    alert("soy el div");
})










