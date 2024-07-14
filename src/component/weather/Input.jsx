import { useState, useEffect } from 'react';
import Inputcss from './Input.module.css';
import Searchicon from '../asset/searchicon.png';
import Location from '../asset/location.png';
import Temp from './Temp.jsx';
import Otherinfo from './Otherinfo.jsx';

function Input() {
    const [cityname, setCityname] = useState('Lucknow');
    const [weatherData, setWeatherdata] = useState(null);

    useEffect(() => {
        fetchWeatherData(cityname);
    }, []); 

    const fetchWeatherData = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9cc51dfef5a6f30875e19712b0f68736&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setWeatherdata(data);
            })
            .catch(error => console.error('Fetch error:', error));
    };

    const getData = () => {
        const city = document.getElementById('cityname').value;
        setCityname(city);
        fetchWeatherData(city);
    };

    return (
        <div className={Inputcss.container}>
            <h2 className={Inputcss.brandtext}>RJ's Weather App</h2>
            <div className={Inputcss.inputcontainer}>
                <input
                    type='text'
                    placeholder='Enter City Name'
                    className={Inputcss.inputtext}
                    id='cityname' />
                <img
                    src={Searchicon}
                    alt='searchicon'
                    className={Inputcss.searchicon}
                    onClick={getData}
                />
            </div>
            <div className={Inputcss.location}>
                <p className={Inputcss.cityname}>{cityname}</p>
                <img src={Location} alt='location' className={Inputcss.locationicon} />
            </div>
            <Temp weather={weatherData} />
            <Otherinfo weather={weatherData} />
        </div>
    );
}

export default Input;
