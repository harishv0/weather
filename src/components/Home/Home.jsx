import React from 'react'
import '../Home/Home.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import bgImg from '../../Assets/cloud-bg.jpeg'
import {useState} from 'react'
import Today from '../Today/Today';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Home = ({search, setText, text}) => {  
  
  <ToastContainer position = 'top-center' z-index = "999999"/>

  const handleSearch = (e) => {
    setText(e.target.value);
  }
  
  const handleEnter = (e) => {
    if(e.key === "Enter"){
      search();
    }
  }
  
  return (

    <div className='homepage'>
      <div className='background'>
        <img className='background_img' src={bgImg} width="100" height="100px"/>
        <div className='search_bar'>
            <SearchSharpIcon className='search_icon'/>
            <input className='search_bar_input' type="text" placeholder='Enter city name' 
              onChange={handleSearch} onKeyDown={handleEnter} value={text}/>
            
        </div>
      </div>
    </div>
  )
}

export default Home
