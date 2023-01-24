let counter = document.querySelector('h3');
let increase=document.querySelector('.increase');
let reset=document.querySelector('.reset');
let decrease=document.querySelector('.decrease');
counter.innerHTML = 0
increase.onclick = function(){
    increasenum()
}
function  increasenum(){
    counter.innerHTML++;
    counter.style.color = "green";
}
decrease.onclick = function(){
    decreasenum()
}
function  decreasenum(){
    counter.innerHTML--
    counter.style.color = "red";
}
reset.onclick = function(){
    resetnum()
}
function  resetnum(){
    counter.innerHTML = 0
    counter.style.color = "blue";
}