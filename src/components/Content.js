import React from 'react'
import contentimg from '../assest/asserts/3.png'
import './Content.css'
const Content = () => {
  return (
    <div className='content'>
        <b>	
INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</b>
    <div className='contimg'><img src={contentimg}></img></div>

    <span className='span'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </span>
    <div className='line'></div>
    <h3 className='h'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
    <span className='span'>
CHEMICALS & PROCESS | POWER WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE |<br></br>PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE | FIGHTING | AGRICULTURE & RESIDENTIAL</span>
    </div>
  )
}

export default Content