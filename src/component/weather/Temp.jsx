import Tempcss from './Temp.module.css';
import Weathericon from '../asset/cloudy.png';
import d01 from '../asset/01d@2x.png';
import d02 from '../asset/02d@2x.png';
import d03 from '../asset//03d@2x.png';
import d04 from'../asset/04d@2x.png';
import d09 from '../asset/09d@2x.png';
import d10 from '../asset/10d@2x.png';
import d11 from '../asset/11d@2x.png';
import d13 from '../asset/13d@2x.png';
import d50 from '../asset/50d@2x.png';

function Temp({ weather }) {
    if (!weather || !weather.weather || !weather.main) {
        return <div>Loading...</div>;
    }

    

    const weatherDescription = weather.weather[0]?.description || "No description available";
    const temperature = weather.main?.temp || "N/A";
    const minTemp = weather.main?.temp_min || "N/A";
    const maxTemp = weather.main?.temp_max || "N/A";
    const feelsLike = weather.main?.feels_like || "N/A";
    function setIcon()
    {
        if(weather.weather[0].icon==='01d' || weather.weather[0].icon==='01n')
        {
            return d01;
        }
        if(weather.weather[0].icon==='02d' || weather.weather[0].icon==='02n')
            {
                return d02;
            }
        if(weather.weather[0].icon==='03d' || weather.weather[0].icon==='03n')
        {
            return d03;
        }
        if(weather.weather[0].icon==='04d' || weather.weather[0].icon==='04n')
            {
                return d04;
            }
        if(weather.weather[0].icon==='09d' || weather.weather[0].icon==='09n'){
            return d09;
        }
        if(weather.weather[0].icon==='10d' || weather.weather[0].icon==='10n'){
            return d10;
        }
        if(weather.weather[0].icon==='11d' || weather.weather[0].icon==='11n'){
            return d11;
        }
        if(weather.weather[0].icon==='13d' || weather.weather[0].icon==='13n'){
            return d13;
        }
        if(weather.weather[0].icon==='50d' || weather.weather[0].icon==='50n'){
            return d50;
        }
        
        else {
            return Weathericon;
        }
    }
    


    return (
        <div className={Tempcss.tempcont}>
            <img src={setIcon()} alt='weathericon' className={Tempcss.weathericon} />

            <p className={Tempcss.weathercondition}>{weatherDescription}</p>

            <div className={Tempcss.tempcontainer}>
                
                <p className={Tempcss.weathercondition1}>{Math.round(temperature)}&deg;C</p>
                <div className={Tempcss.allminmaxtempcont}>
                    <div className={Tempcss.minmaxtempcont}>
                        <h6 className={Tempcss.mintemp}>Min: {Math.round(minTemp)}&deg;C</h6>
                        <h6 className={Tempcss.maxtemp}>Max: {Math.round(maxTemp)}&deg;C</h6>
                    </div>
                    <h5 className={Tempcss.feeltemp}>Feels like: {Math.round(feelsLike)}&deg;C</h5>
                </div>
            </div>
        </div>
    );
}

export default Temp;
