import React from 'react'
import img_work from'../assets/imgWork.png';
import img_mobiles from'../assets/mobiles.png';
import arrow_icon from'../assets/icons/arrow_icon.svg';

export default function Work() {
return(
    
    <div className='container-fluid'>
    <div className='container'>
        <img classNameName='' style={{width:60}} src={arrow_icon}/>
    <div className='text-center mb-5'>
    <h2 className='font-color txt-uppercase'>our work</h2>
    <p>Some of the projects we have done in the past</p>
    </div>
    <div className="row  g-4 py-4 margin-bottom"> 
    <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 border-right'>
        <div>
    <p className='txt-uppercase'> we got this</p>
    <h2 className='font-color'>Mobile App</h2>
    <h2 className='font-color'>Done right</h2>
        </div>
    </div>
    
    
    <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
        <div className="px-lg-4">
            <p className="pt-3">Our desert identity is the greatest proof of our adherence to our ancient and honorable past. Wise man now is the one who creates a brand that be- comes part of history</p>
        </div>
    </div>
    
    
    
    </div>
    
    <div className='mb-4'>       
    <div className='text-center '>
    <img className="w-75" src={img_mobiles}/>
    </div>
       	<div class='text-center  margin-bottom'>
            <button class='btn text-center  shadow-none outline-0  border-0  fw-bold  px-5 py-2 btn-show'
			   type='submit' style={{borderRadius:50}}>Show More</button>
                     
         </div>
    </div>
    
    <div class="row g-4 margin-bottom"> 
    <div class='col-md-6 col-lg-6 col-xl-6 col-xxl-6 border-right'>
        <div>
    <p class='txt-uppercase'> we got this</p>
    <h3 class='font-color'>Mobile App</h3>
    <h3 class='font-color'>Done right</h3>
        </div>
    </div>
    
    <div class='col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
        <div class="px-lg-4" >
            <p className="pt-3">Our desert identity is the greatest proof of our adherence to our ancient and honorable past. Wise man now is the one who creates a brand that be- comes part of history</p>
        </div>
    </div>
    </div>
    

    <div className=' '>       
    <div className='text-center mt-5'>
    <img className="img-work mt-3" src={img_work}/>
    </div>
       	<div class='text-center mt-4 mb-4'>
            <button class='btn text-center  shadow-none outline-0  border-0  fw-bold  px-5 py-2 btn-show'
			   type='submit' style={{borderRadius:50}}>Show More</button>
                     
         </div>
    </div>
					   
     
   
    </div>
 </div>
 
 
)   

}