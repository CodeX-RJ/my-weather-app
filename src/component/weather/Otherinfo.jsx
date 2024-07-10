import Otherinfocss from './Otherinfo.module.css';
import Humidiy from '../asset/humidity.png';
import Wind from '../asset/storm.png';
import Sunrise from '../asset/sunrise.png';
import Sunset from '../asset/sunset.png';

function Otherinfo(weather)
{
    if (!weather || !weather.weather) {
        return <div>Loading...</div>;
    }
    const humiDity = weather.weather.main.humidity;
    const windSpeed = weather.weather.wind.speed;
    const convertTime = (unix) => {
        const dateobj = new Date(unix*1000);
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        return dateobj.toLocaleTimeString([], options);
    }
    const sunRise = convertTime(weather.weather.sys.sunrise);
    const sunSet = convertTime(weather.weather.sys.sunset);
    const sunRisea = sunRise.replace('am', 'AM').replace('pm', 'PM');
    const sunSeta = sunSet.replace('pm', 'PM').replace('am', 'AM');

    return <div className={Otherinfocss.otherinfocontainer}>
        <div className={Otherinfocss.infocont}>
        <img src={Humidiy} alt='humidity' className={Otherinfocss.iconhum}/>
            <p className={Otherinfocss.texthum}>{humiDity}%</p>
        </div>
        <div className={Otherinfocss.infocont}>
        <img src={Wind} alt='humidity' className={Otherinfocss.iconhum}/>
            <p className={Otherinfocss.texthum}>{windSpeed} m/s</p>
        </div>
        <div className={Otherinfocss.infocont}>
        <img src={Sunrise} alt='humidity' className={Otherinfocss.iconhum}/>
            <p className={Otherinfocss.texthum}>{sunRisea}</p>
        </div>
        <div className={Otherinfocss.infocont}>
        <img src={Sunset} alt='humidity' className={Otherinfocss.iconhum}/>
            <p className={Otherinfocss.texthum}>{sunSeta}</p>
        </div>
        
    </div>
}
export default Otherinfo;