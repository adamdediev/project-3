let slaid1 = document.querySelector("#slaid_1"),
slaid2 = document.querySelector("#slaid_2"),
slaid3 = document.querySelector("#slaid_3"),
slaid4 = document.querySelector("#slaid_4");
function slide1(){
   slaid1.style.order = '0';
   slaid1.classList.add("opasity");
   slaid2.style.order = '-1';
   slaid2.classList.remove("opasity");
 };
 function slide2(){
   slaid1.style.order = '-1';
   slaid1.classList.remove("opasity");
   slaid2.style.order = '0';
   slaid2.classList.add("opasity");
    
 };
 function slide3(){
   slaid3.style.order = '0';
   slaid3.classList.add("opasity");
   slaid4.style.order = '1';
   slaid4.classList.remove("opasity");
 };

function slide4(){
   slaid3.style.order = '1';
   slaid3.classList.remove("opasity");
   slaid4.style.order = '0';
   slaid4.classList.add("opasity");
    
};


let slaid = document.querySelectorAll(".slaidbar"),
    roots = document.querySelectorAll(".root");
    
function slaidbar1(){
  slaid[0].style.order = '0';
  slaid[1].style.order = '-1';
  slaid[2].style.order = '2';
  slaid[3].style.order = '1';
  for(let i = 0 ; i < slaid.length ; i++){
    if(slaid[i].style.order === '0'){slaid[i].classList.add("opasity1")}
    if(slaid[i].style.order !== '0'){slaid[i].classList.remove("opasity1")}}};
function slaidbar2(){
      slaid[0].style.order = '-1';
      slaid[1].style.order = '0';
      slaid[2].style.order = '2';
      slaid[3].style.order = '1';
      for(let i = 0 ; i < slaid.length ; i++){
        if(slaid[i].style.order === '0'){slaid[i].classList.add("opasity1")}
        if(slaid[i].style.order !== '0'){slaid[i].classList.remove("opasity1")}}};
function slaidbar3(){
          slaid[0].style.order = '-2';
          slaid[1].style.order = '1';
          slaid[2].style.order = '0';
          slaid[3].style.order = '1';
          for(let i = 0 ; i < slaid.length ; i++){
            if(slaid[i].style.order === '0'){slaid[i].classList.add("opasity1")}
            if(slaid[i].style.order !== '0'){slaid[i].classList.remove("opasity1")}}};
function slaidbar4(){
              slaid[0].style.order = '-3';
              slaid[1].style.order = '2';
              slaid[2].style.order = '1';
              slaid[3].style.order = '0';
              for(let i = 0 ; i < slaid.length ; i++){
                if(slaid[i].style.order === '0'){slaid[i].classList.add("opasity1")}
                if(slaid[i].style.order !== '0'){slaid[i].classList.remove("opasity1")}}};


let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let close = document.querySelector(".close");

function burg(){
  if(burger.style.display = "none"){
    nav.style.display = "flex";
    close.style.display = "block";
  }  
}

function close1(){
  burger.style.display = "block"
  nav.style.display = "none";
    close.style.display = "none";
}
