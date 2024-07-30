import React from 'react'
import sun from '../../Assets/sun.svg'
import '../Days/Days.css'
import {useState} from 'react'

const Days = () => {

const[degree, setDegree] = useState(0);
const[day, setDay] = useState("Monday");
const[city, setCity] = useState("Chennai");
  return (
    <div className='days_container'>
      <div className='container_top'>
        <h3>{day}</h3>
      </div>
      <div className='container_middle'>
        <img src={sun} height="60px" width="60px" />
      </div>
      <div className='container_bottom'>
        <h3>{degree}</h3>
      </div>
    </div>
    
  )
}

export default Days
