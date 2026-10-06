import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutUS from'./Components/aboutUs';
import ContactUs from'./Components/contactUs';
import Services from './Components/services';
import Work from './Components/work';
import Office from './Components/office';
import './styles/myStyle.css';
import './styles/contactStyle.css';
import Fourz from './Components/fourz';
import Navbar from './Components/navBar';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init();

});

  return (
    <div className='index'>
      <Navbar/>
      <Fourz/>
    <AboutUS/>
     <Services/>
    <Work/>
   <ContactUs/>
 
    <Office/>
    </div> 

  


  )
}

export default App
