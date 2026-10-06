import React, { useEffect } from 'react'
import '../styles/navBarStyle.css';
import icon_bar from '../assets/icons/bar_icon.svg';
import icon_close from '../assets/icons/close_icon.svg';
import img_logo from '../assets/img_logo.svg';
 
export default function navBar() {
    useEffect(()=>{
        
var parnt=document.getElementById('open');
var nav=document.getElementById('nav');
var close=document.getElementById('close');
var links=document.querySelector('ul');


console.log(parnt);
console.log(nav);
console.log(nav.className);

parnt.addEventListener('click',function(){
//nav.toggleclass('open');
if(nav.classList.contains('open'))
{
nav.classList.remove('open');
}
else{
nav.classList.add('open');
testing();
}

});

close.addEventListener('click',function(){

links.classList.add('trans');
nav.classList.remove('open');
});

function testing(){
let circularProgress=document.querySelector('.circular-progress');
let progressValue=document.querySelector('.progress-value');
let progressStartValue=0,
    progressEndValue=100,
	speed=10;
	let progress=setInterval(()=>{
	progressStartValue++;
	//progressValue.textContent=`${progressStartValue}%`;
	circularProgress.style.background=
	`conic-gradient(#EDA233 ${progressStartValue*3.6}deg,#ededed 0deg)`;
	if(progressStartValue==progressEndValue){
	clearInterval(progress);}
	console.log(progressStartValue);
	},speed);
	




};

    });



  return (

  

 <div class="container-fluid " id="parent">    
<div class="container pt-4">
<div class="d-flex justify-content-between">
<div>
<img  src={img_logo} style={{width:158}}/>
</div>
<div>
<img class="w-50" id="open" src={icon_bar}/>
<div class="open"></div>
 <div class="bread"> </div>
</div>

</div>
</div>
  
    <nav class="nav  menu" id="nav">
    <div class="container-fluid">
    
     <div class="container menuContent">
     <div class="text-end">
    <button class="clos" id="close"><img src={icon_close}/></button></div>
      <div class="row">
      <div class="col-md-4 col-lg-4">
      <div> 
      <ul>
          <li><a href="#AboutUS" class="font-color fw-bold">About Us</a></li>
          <li><a href="#Services" class="font-color fw-bold">Our Services</a></li>
          <li><a href="#Works" class="font-color fw-bold">Our Works</a></li>
          <li><a href="#Contacts" class="font-color fw-bold">Contact Us</a></li>
        </ul>
      </div>
       
        </div>
         <div class="col-md-4 col-lg-4">
    <div class="">
    <div class="circular-progress">
    <div class="alaa2"></div>
    <span class="progress-value text-white">0%</span>
    <span><img class="" src=""/></span>
    </div>
    </div>
    
      </div>
      
         <div class="col-md-4 col-lg-4">
      <div class="alaa"> 
      <div class="mb-4 tran">
        <h4 class="font-color">Contact Us</h4>
      <p>info@7di.sa</p>
      </div> 
      <div class="mb-4 tran">
        <h4 class="font-color">Location</h4>
      <p>Riyadh, Alyasmin</p>
      </div>
    
      </div>
       
        </div>
      </div>
    </div>
    </div>
    </nav>
    
    
    
    </div>

  )
}
