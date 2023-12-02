import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData = () => {
    const [weatherData, setWeatherData] = useState();
    const [lognt,setLongnt] = useState(44.34);
    const [lat,setLat] = useState(10.99);

    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lognt}&appid=8857cb61b56eea479d375ae05c0fea63`

    const fetchData = async () => {
        const data = await axios.get(ApiUrl);
        try {
            setWeatherData(data.data)
            console.log(weatherData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <>
            <div>FetchData</div>
<span>set Lattitude of location</span>
            <input type="text"  onChange={(e)=>setLat(e.target.value)}/> <br />
            <span>Long</span>
            <input type="text" onChange={(e)=>setLongnt(e.target.value)} />
            <button onClick={fetchData}> FetchData Button</button>
            <ul>
                <span>feels_like
                </span>
                <li>{weatherData?.main.feels_like}</li>
                <li>{ }</li>
                <li>{ }</li>
                <li>{ }</li>
            </ul>
        </>
    )
}

export default FetchData