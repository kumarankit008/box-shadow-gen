let inputs=document.querySelectorAll(".input");
let text=document.querySelector(".shadow-text");

function start(){
   let x=document.getElementById("x").value;
   let y=document.getElementById("y").value;
   let blur=document.getElementById("blur").value;
   var colour=document.getElementById("color").value;
   const change='box-shadow:'+x+'px '+y+'px '+blur+'px '+colour;
    document.documentElement.style.setProperty('--color',colour);
    if(x>0 || x<0){
    document.documentElement.style.setProperty('--x',x+"px");}
    if(y>0 || y<0){
    document.documentElement.style.setProperty('--y',y+"px");

    }
    if(blur>0){
    document.documentElement.style.setProperty('--blur',blur+"px");

    }
    
    text.innerHTML=change;

    

}
function copy(){
    let element = document.createElement("textarea");
    element.value=text.textContent;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("Copied!!");
}