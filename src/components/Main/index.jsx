import React from 'react'
import cl from './Main.module.scss'

const Main = ({weatherData = null}) => {


    return (
        <div>
            {weatherData ? (
            <div>
               <h2>{weatherData?.name}</h2>
            <h2>{weatherData?.main.temp} C°</h2>  
            <h2>{weatherData?.weather[0].description}</h2>  
            </div>
            ) :
            <p>Введите город</p>
            }
           
        </div>
    )
}

export default Main
