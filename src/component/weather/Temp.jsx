import Tempcss from './Temp.module.css';
import Weathericon from '../asset/cloudy.png';

function Temp({ weather }) {
    if (!weather || !weather.weather || !weather.main) {
        return <div>Loading...</div>;
    }

    const weatherDescription = weather.weather[0]?.description || "No description available";
    const temperature = weather.main?.temp || "N/A";
    const minTemp = weather.main?.temp_min || "N/A";
    const maxTemp = weather.main?.temp_max || "N/A";
    const feelsLike = weather.main?.feels_like || "N/A";

    return (
        <div className={Tempcss.tempcont}>
            <img src={Weathericon} alt='weathericon' className={Tempcss.weathericon} />

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
