let string="";
let display=document.querySelector("input");
let buttons=document.querySelectorAll("button");
buttons.forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            display.value=eval(display.value);
        }
        else if(e.target.innerHTML=="C"){
            display.value="";
        }
        else if(e.target.innerHTML=="x"){
            display.value=display.value.substring(0, display.value.length - 1);
        }
        else{
            display.value+=e.target.innerHTML;
        }
    })
})