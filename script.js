const counter = document.getElementById('counter');
const inbtn = document.getElementById("In");
const debtn = document.getElementById("De");
const rebtn = document.getElementById("Re");

let counterval = 0;

inbtn.addEventListener('click', function(event){
    counterval += 1;
    counter.innerHTML = counterval
}) 

debtn.addEventListener('click', function(event){
    counterval -= 1;
    counter.innerHTML = counterval
}) 

rebtn.addEventListener('click', function(event){
    counterval = 0;
    counter.innerHTML = counterval
}) 

