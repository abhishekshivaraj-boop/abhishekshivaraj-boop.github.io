//
// Typing animation

const text = ["Java Developer","Web Developer","Backend Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0,++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,120);
}

type();


// Scroll reveal

window.addEventListener("scroll",()=>{

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(section=>{

const windowHeight = window.innerHeight;
const revealTop = section.getBoundingClientRect().top;
const revealPoint = 150;

if(revealTop < windowHeight - revealPoint){
section.classList.add("active");
}

});

});


// Skill bar animation

window.addEventListener("scroll",()=>{

const skills = document.querySelectorAll(".progress");

skills.forEach(skill=>{
skill.style.width = skill.dataset.width;
});

});

