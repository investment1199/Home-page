/* =====================================
   NovaFund Professional App JS
===================================== */

// Sticky Header

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});



// Active Menu

const navLinks=document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});



// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});




// Scroll Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(

".feature-card,.service-card,.stat-card,.about-card,.why-card,.faq-item,.contact-card"

).forEach(el=>observer.observe(el));




// Counter Animation

const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=counter.innerText.replace(/\D/g,'');

const current=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/100);

if(current<target){

counter.setAttribute("data-count",current+increment);

counter.innerText=(current+increment)+"+";

setTimeout(updateCounter,25);

}else{

counter.innerText=target+"+";

}

};

updateCounter();

});




// Hero Card Animation

const heroCard=document.querySelector(".hero-card");

if(heroCard){

setInterval(()=>{

heroCard.style.transform="translateY(-8px)";

setTimeout(()=>{

heroCard.style.transform="translateY(0px)";

},900);

},2500);

}




// Button Ripple Effect

document.querySelectorAll(".btn-primary,.btn-outline").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});




// Console

console.log("NovaFund Loaded Successfully");
