import React, { useEffect, useState } from 'react'
import "./main.css"
import logo from "./img/logo.png"
import obl from "./img/obl.svg"
import MyButton from '../../UI/button/MyButton';


function Main() {
    const [wether, setwether] = useState('')
    const [ico, setIco] = useState('')
    const ApiKey = '0e8807369d0d3690fa9f52e8eea975ef'
    const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
    const [city, setCity] = useState('kiev')
    const [country, setcountry] = useState('')
    const date = new Date()
      
    const fetchWether = async () => {
        const res = await fetch(ApiUrl + '&q=' + city + '&appid=' + ApiKey)
        var data = await res.json()

        setIco(data.weather[0].icon)
        setcountry(data.sys.country)
        setwether(data.main)
        console.log(data)
    }

    useEffect(() => {
        fetchWether()
      }, [])
    
    return ( 
        <div className='main'>
            
            <div className='bl'>

                <img className='logo' src={logo} alt=""/>
                <h1 className="txt city">Киев</h1>
                <h3 className="txt">Киевская область </h3>
                <h3 className="txt">{country}</h3>

                <div className='temp'>
                    <h1 className="txt grad">
                    {
                    wether.temp > 0 ? "+" + Math.round(wether.temp): Math.round(wether.temp)  
                    }°
                    </h1>

                    <img src={"https://openweathermap.org/img/wn/" + ico + "@2x.png"} alt="" />

                </div>

                <div className='inf'>
                    <h3 className="txt">Ощущаеться как {Math.round(wether.feels_like)}° </h3>
                    <h3 className="txt">Давление {wether.pressure} bar </h3>
                    <h3 className="txt">Влажность {wether.humidity}%</h3>
                </div>

            </div>

        </div>
     );
}

export default Main;