import React from 'react'
import './home.css'
import leftimg from '../assest/asserts/1.png'
import rightimg from '../assest/asserts/2.png'
const Home = () => {
  return (
    <div className='home'>
        <div className='left'>
    <div className='lefimg'> <img src={leftimg} ></img></div>
        </div>




        <div className='right'>
            <h1> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
      
<ul>
<li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
<li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
</ul>

<div className='rigimg'><img src={rightimg}></img></div>
     
    <p className='cn'>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director <br></br>of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable<br></br> Minister of State.</p>
        </div>
        
    </div>
  )
}

export default Home;