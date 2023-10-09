import React, { useEffect, useState } from 'react'
import "./main.css"
import logo from "./img/logo.png"
import obl from "./img/obl.svg"
import MyInput from '../../UI/input/MyInput';
import MyButton from '../../UI/button/MyButton';


function Main() {
    const [wether, setwether] = useState('')
    const [ico, setIco] = useState('')
    const ApiKey = '0e8807369d0d3690fa9f52e8eea975ef'
    const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
    const [city, setCity] = useState('Zhytomyr')
    const [input, setinput] = useState('')
      
    const fetchWether = async () => {
        const res = await fetch(ApiUrl + '&q=' + city + '&appid=' + ApiKey)
        var data = await res.json()
       
        setIco(data.weather[0].icon)
        setwether(data.main)
        console.log(data)
    }

    

    useEffect(() => {
        fetchWether()
      }, [city])
    
    return ( 
        <div className='main'>
            
            <div className='bl'>
                
                
                <div className='ch'>
                    <MyInput style={{borderRadius: "2em"}} value={input} onChange={(e) => setinput(e.target.value)} placeholder="Zhytomyr"/>
                    
                    <MyButton style={{backgroundColor: "white", color: "black"}} onClick={() => setCity(input)}>
                        Поменять город
                    </MyButton>
                </div>
                 
               
                

                <div className='temp'>
                    <h1 className="txt grad">
                    {
                    wether.temp > 0 ? "+" + Math.round(wether.temp): Math.round(wether.temp)  
                    }°
                    </h1>

                    <img className='img' src={"https://openweathermap.org/img/wn/" + ico + "@2x.png"} alt="" />

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