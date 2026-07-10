// ===============================
// NovaFund App.js
// ===============================

// Sticky Header

window.addEventListener("scroll", () => {

const header = document.querySelector(".header");

if(window.scrollY > 50){

header.style.background="#0b1120";
header.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

}else{

header.style.background="#111827";
header.style.boxShadow="none";

}

});


// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".stat-box h2");

const speed=80;

counters.forEach(counter=>{

const update=()=>{

const target=counter.innerText.replace(/\D/g,"");

const count=+counter.getAttribute("data-count") || 0;

const inc=Math.ceil(target/speed);

if(count<target){

counter.setAttribute("data-count",count+inc);

counter.innerText=(count+inc)+"+";

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

};

update();

});


// ===============================
// Button Hover Effect
// ===============================

const buttons=document.querySelectorAll("button,.primary-btn,.plan-btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ===============================
// Fade Animation
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".feature-card,.plan-card,.about-card,.faq-item,.stat-box").forEach(el=>{

observer.observe(el);

});


// ===============================
// Welcome
// ===============================

console.log("NovaFund Loaded Successfully");
