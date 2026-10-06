import React from 'react'
 import '../styles/contactStyle.css';
export default function ContactUs() {
    return(
      <div className='container-fluid'>
   <div className='container'>
   <div className="text-center">
        <h2 className="font-color mb-5">Contact US</h2>
		</div>
        <form>      
        <div className='row'>
        <div className="col-md-6">     
	
            <input type="text" className="form-control    shadow-none input"  placeholder="Your Name"  id="name" name="name" />                 
                   </div>

          <div className="col-md-6">     
            <input type="email" className="form-control  shadow-none input"  placeholder="Your Email"   id="email" name="email" />                 
                   </div>
            <div >
              <textarea id="textarea" className="form-control  shadow-none  textarea " placeholder="Your Message" style={{marginTop:66}}></textarea>
            </div>
                  
                   </div>
                  
						
	
                       <div class='text-center mt-5 mb-5'>
            <button class='btn text-center  shadow-none outline-0  border-0  fw-bold  px-5 py-2 btn-send'
			   type='submit' style={{borderRadius:50}}>Send Message</button>
                     
         </div>
          </form>
        </div>
        </div>
 
    
    )
}
