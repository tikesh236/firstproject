var bulb = document.querySelector("#buld");
var btn = document.querySelector("button");

var flag = 0  


btn.addEventListener("click", function(){
  
    if( flag == 0 ){
        bulb.style.backgroundColor = "yellow";
        flag = 1
    }else{
        bulb.style.backgroundColor = "transparent";
        flag= 0
    }
  
  
})