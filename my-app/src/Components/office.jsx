import React from 'react'
import icon_facebook from'../assets/icons/facebook_icon.svg';
import icon_instagram from'../assets/icons/instagram_icon.svg';
import icon_twitter from'../assets/icons/twitter_icon.svg';
import icon_linkedin from'../assets/icons/linkedin_icon.svg';


export default function Office() {
    return(
      
     <div className='container-fluid container-background  '>
     <div className='container pt-5 pb-2'>
   <div className="text-center mb-5"><h2 className='text-white'>Our Office</h2></div>
         <div className='row'>

         <div className='col-sm-6 col-md-3'>
         <div>
         <h4 className='font-color'>Email</h4>
         <p>example@gmail.com</p>
         </div>
         </div>
 
 
         <div className=' col-sm-6 col-md-3'>
         <div>
         <h4 className='font-color'>Phone</h4>
         <p>+966 52665335</p>
         </div>
         </div>
 
 
 
 
         <div className='col-sm-6 col-md-3'>
         <div>
         <h4 className='font-color'>Location</h4>
         <p>Riyadh, Alyasmin</p>
         </div>
         </div>
 
 
 
         <div className='col-sm-6 col-md-3'>
         <div>
         <h4 className='font-color'>Our branches</h4>
         <p>K.S.A / Palestine</p>
         </div>
         </div>
 
 
 
 
 
         </div>
         </div>

         
     <footer className='text-center py-4 mt-4'>
     <div className="d-flex justify-content-center" id="icons">
                  <a className="btn btn-sm-square rounded-circle d-flex justify-content-center align-items-center shadow-none  me-3" href="#">             
                  <img className='' src={icon_facebook}/></a>
 
               <a className="btn btn-sm-square  rounded-circle d-flex justify-content-center align-items-center  shadow-none  ms-3 me-3" href="#">
               <img className='' src={icon_twitter}/></a>

                <a className="btn btn-sm-square  rounded-circle d-flex justify-content-center align-items-center shadow-none  ms-3 me-3" href="#">
                <img className='' src={icon_linkedin}/></a>

                   <a className="btn btn-sm-square rounded-circle d-flex justify-content-center align-items-center  shadow-none  ms-3 " href="#">
                   <img className='' src={icon_instagram}/></a>

               
             </div>
 
 </footer>
         </div>




            
        )
}