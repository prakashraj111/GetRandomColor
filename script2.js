let h3 = document.querySelector("h3");
let btn=document.querySelector("button");
let div = document.querySelector("#color-box");


btn.addEventListener("click",function(){
 h3.innerText = getRandomColor();

 
div.style.backgroundColor = getRandomColor();
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`
    return color;
}
