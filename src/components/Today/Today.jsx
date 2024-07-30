import React from 'react'
import sun from '../../Assets/sun.svg'
import '../Today/Today.css'
import {useState} from 'react'
import Home from '../Home/Home'
import { colors } from '@mui/material'

const Today = ({day, city, degree, icon, lat, lng, description}) => {

  var strCity = city.toUpperCase();
  var setDesc = description.charAt(0).toUpperCase();
  var setDescription = setDesc + description.slice(1)
  return (
    <div className='today_container'>
    <div className='weather_container'>
      <div className='container_left'>
        <div className='left_image'>
          <img className="left_img"src={icon}/>
        </div>    
      </div>
      <div className='right_container'>
          <div className='day'>{day}</div>
          <div className='city'>{strCity}</div>
          <span className='latlong'>
          <h3 className='lat'>LAT: {lat}</h3>
          <h3 className='long'>LONG: {lng}</h3>
          </span>
          <h3 className='temp'>Temperature: {degree}&deg;C</h3>
          <div className='description'>{setDescription}</div>
      </div>
    </div>
    </div>
  )
}

export default Today
