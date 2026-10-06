import React from 'react'
import img1 from'../assets/img1.png';
import img2 from'../assets/img2.png';
export default function Fourz() {
    return (
        <div className='container-fluid'>
        <div className='container pt-5'>
          <div className='row mb-5 py-5'>
          <div className='col-md-6'>
            <div >
          <p>We will not say What is </p>
          <h3 className='font-color'>What is</h3>
          <h3 className='font-color'>FOUR Z</h3>
          <p>But we will say</p>
          <h3 className='font-color'>Who are </h3>
          <h3 className='font-color'>FOUR Z</h3>
          <p>Who are Seven Dimensions and what can a group of creators and innovators do? The answer would certainly be that they can do a lot.. Don’t miss out on a lot of creativity !</p>
          <div>
          </div>
          </div>
          </div>

    
    
          <div className='col-md-6' style={{marginLeft:-10}}>
              <div className='d-flex' style={{justifyContent:'space-between'}}>
                  <div>
                <img className='w-50' src={img1}/>
  
                  </div>
                  <div className='' style={{marginLeft:-196,marginTop:80}}>
                <img className='w-50' src={img2}/>
  
                  </div>
              </div>
          </div>
          
    
          </div> 
           </div>
   
          </div>
         );
}
