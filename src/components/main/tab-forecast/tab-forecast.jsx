import { useStore } from 'effector-react';
import { $weatherForecast } from '../../../store/weatherForecast';
import ForecastCard from '../forecast-card/forecast-card';
import './tab-forecast.css';

function TabForecast() {
  const { loading, error, $locationName, $timezone, $forecastList } = useStore($weatherForecast)

  if (loading) {
    return <section className="loading">Loading...</section>;
  }
  if (error) {
    throw new Error(error);
  }
  return (
    <section className="tab-forecast">
      <div className="forecast-location">{$locationName}</div>
      <div className='forecast-cards-wrapper'>
        <ul className="forecast-cards">
          {$forecastList.map((data, index) => (
            <ForecastCard 
              key={index} 
              timezone={$timezone}
              timestamp={data.dt}
              weather={data.weather?.[0]?.main}
              temperature={data.main?.temp}
              feelsLike={data.main?.feels_like}
              icon={data.weather?.[0]?.icon}
              />
          ))}
      </ul>
      </div>
    </section>
  );
}

export default TabForecast;
