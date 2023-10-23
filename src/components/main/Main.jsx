import React, { useEffect, useState } from 'react'
import "./main.css"
import MyInput from '../../UI/input/MyInput';
import MyButton from '../../UI/button/MyButton';


function Main() {
    const [main, setmain] = useState('')
    const [cloud, setcloud] = useState('')
    const [wind, setwind] = useState('')
    const [ico, setIco] = useState('')
    const ApiKey = '0e8807369d0d3690fa9f52e8eea975ef'
    const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
    const [city, setCity] = useState('Zhytomyr')
    const [input, setinput] = useState('')
    const [err, setErr] = useState(false)
    const [visible, setvisible] = useState(false)
    const [but, setbut] = useState(false)
      
    const fetchWether = async () => {
        setErr(false)
        try {
            const res = await fetch(ApiUrl + '&q=' + city + '&appid=' + ApiKey)
            var data = await res.json()
            setIco(data.weather[0].icon)
            setcloud(data.clouds)
            setmain(data.main)
            setwind(data.wind)
        } catch (error) {
            setErr(data.message)
        }
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
                 
               <h1 className='txt err'>{err}</h1>
                

                <div className='temp'>
                    <h1 className="txt grad">
                    {
                    main.temp > 0 ? "+" + Math.round(main.temp) : Math.round(main.temp)  
                    }°
                    </h1>

                    <img className='img' src={`https://openweathermap.org/img/wn/${ico}@2x.png`} alt="" />

                </div>

                <div className='inf'>
                    <h3 className="txt">Ощущаеться как {Math.round(main.feels_like)}° </h3>
                    <h3 className="txt">Давление {main.pressure} bar </h3>
                    <h3 className="txt">Влажность {main.humidity}%</h3>
                </div>

                <div style={{display: `${visible ? 'flex' : 'none'}`}} className='inf'>
                    <h3 className="txt">Скорость ветра {wind.speed} m/s</h3>
                    <h3 className="txt">Облачность {cloud.all}%</h3>
                    <h3 className="txt wind">Направление ветра<h3 style={{transform: `rotate(${wind.gust}rad)`}}>↑</h3></h3>
                    
                </div>

                <MyButton style={{backgroundColor: "white", color: "black"}} onClick={() => [setbut(!but), setvisible(!visible)]}>
                        {but ? 'Закрыть' : 'Подробнее'}
                </MyButton>

            </div>

        </div>
     );
}

export default Main;