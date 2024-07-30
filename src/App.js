import './App.css';
import Home from './components/Home/Home';
import Today from './components/Today/Today';
import sun from './Assets/Mrng.png'
import {toast} from 'react-toastify'
import { useEffect, useState} from 'react';
import MrngClearSky from './Assets/Mrng.png'
import NightClearSky from './Assets/Night.png'
import MrngFewClouds from './Assets/Mrng.png'
import NightFewClouds from './Assets/NightFewClouds.png'
import MrngScatterdClouds from './Assets/MrngScatterdClouds.png'
import NightScatterdClouds from './Assets/NightScatterdClouds.png'
import MrngBrokenClouds from './Assets/MrngBrokenClouds.png'
import NightBrokenClouds from './Assets/NightBrokenClouds.png'
import MrngThunderStrom from './Assets/MrngThunderStrom.png'
import NightThunderStrom from './Assets/NightThunderStrom.png'
import MrngRain from './Assets/MrngRain.png'
import NightRain from './Assets/NightRain.png'
import MrngSnow from './Assets/Mrngsnow.png'
import NightSnow from './Assets/NIghtSnow.png'


function App() {
const API_KEY = "1059d62774a2458f7c1cc92bb2046be3";
const[degree, setDegree] = useState(34.04);
const[day, setDay] = useState("Monday");
const[city, setCity] = useState("Chennai");
const[icon,setIcon] = useState(sun);
const[lat, setLat] = useState(0);
const[lng, setLng] = useState(0);
const[cityNotFound, setCityNotFound] = useState(false);
const[loading,setLoading] = useState(false);
const[text,setText] = useState("Chennai");
const weekday=["Sunday", "Monday", "Tuesday", "WednesDay","ThursDay", "Friday", "Saturday"]
var d = new Date();
var dayi = weekday[d.getDay()]
const weatherIcons = {
  "01d": MrngClearSky,
  "01n": NightClearSky,
  "02d": MrngFewClouds,
  "02n": NightFewClouds,
  "03d": MrngScatterdClouds,
  "03n": NightScatterdClouds,
  "04d": MrngBrokenClouds,
  "04n": NightBrokenClouds,
  "09d": MrngBrokenClouds,
  "09n": NightScatterdClouds,
  "10d": MrngRain,
  "10n": NightRain,
  "11d": MrngThunderStrom,
  "11n": NightThunderStrom,
  "13d": MrngSnow,
  "13n": NightSnow,
  "50d": MrngClearSky,
  "50n": NightClearSky
}
const[description, setDescription] = useState("sunny")

const search = async () => {
  setLoading(true)
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}&units=Metric`;
  try{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    // console.log(date);
    if(data.cod === "404"){
      console.log("City Not Found")
      setCityNotFound(true)
      setLoading(false)
      return;
    }
    setDegree(data.main.temp)
    setCity(data.name)
    setLat(data.coord.lat)
    setLng(data.coord.lon)
    setDay(dayi)
    const weatherCode = data.weather[0].icon;
    setIcon(weatherIcons[weatherCode] || sun)
    setDescription(data.weather[0].description)
    toast.success("City found")
    setLoading(false)
    var dayss = new Date(1722185100 * 1000).toLocaleDateString("en", {weekday:"long",})
    console.log(dayss)

  }
  catch(error){
    toast.error("City Not Found")
  }
  finally{
    setLoading(false)
  }
} 

useEffect(function() {
  search();
},[]);
  return (
    <div>
      <Home search = {search} setText={setText} text={text}/>
      <Today degree={degree} day = {day} city={city} icon={icon} lat={lat} lng={lng} description={description}/>
    </div>
  );

}
export default App;
