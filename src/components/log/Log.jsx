import React, { useState } from 'react'
import "./Log.css"
import logo from "./img/logo.png"
import MyButton from "../../UI/button/MyButton.jsx"
import google from "./img/google.png"
import facebook from "./img/facebook.png"

function Log() {
    

    return ( 
        <div className='logPage'>

            <img className='logo' src={logo} alt="" />
            
            <MyButton onClick={() => {console.log('route')}}>
                Вход
            </MyButton>

            <MyButton onClick={() => {console.log('route')}} style={{backgroundColor: "black", color: "white"}}>
                Регистрация
            </MyButton>

            <h3>
                или
            </h3>
            
            <div className='social'>
                <a href="https://www.google.com/">
                    <img onClick={() => {console.log('route')}} className='google' src={google} alt="" />
                </a>
                <a href="https://facebook.com/">
                    <img onClick={() => {console.log('route')}} src={facebook} alt="" />
                </a>
                
            </div>
            
        </div>
     );
}

export default Log;