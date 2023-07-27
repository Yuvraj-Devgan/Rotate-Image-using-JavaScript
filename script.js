let img = document.getElementById("heroImg");

function rotate1(){
    img.style.transform = "rotate(90deg)";
    img.style.transition = ".5s";
    document.getElementById("txt").innerHTML = "90deg Rotated Image";
}
function rotate2(){
    img.style.transform = "rotate(180deg)";
    img.style.transition = ".5s";
    document.getElementById("txt").innerHTML = "180deg Rotated Image";
}
function rotate3(){
    img.style.transform = "rotate(270deg)";
    img.style.transition = ".5s";
    document.getElementById("txt").innerHTML = "270deg Rotated Image";
}
function rotate4(){
    img.style.transform = "rotate(360deg)";
    img.style.transition = ".5s";
    document.getElementById("txt").innerHTML = "360deg Rotated Image";
}