import React from 'react';
import { extractDate, extractTime } from '../../../shared/helpers';
import './forecast-card.css';

export default function ForecastCard({timestamp, timezone, temperature, feelsLike, weather, icon}) {
  return (
    <li className="forecast-card">
      <div className="forecast-card-date">
        <span>{extractDate(timestamp, timezone)}</span>
      </div>
      <div className="forecast-card-time">
        <span>{extractTime(timestamp, timezone)}</span>
      </div>
      <div className="forecast-card-temp">
        <span>{`Temperature: ${temperature}`}&#176;</span>
      </div>
      <div className="forecast-card-feels">
        <span>{`Feels like: ${feelsLike}`}&#176;</span>
      </div>
      <div className="forecast-card-weather-title">
        <span>{weather}</span>
      </div>
      <img 
        className="forecast-card-weather-icon" 
        src={`http://openweathermap.org/img/wn/${icon}@4x.png`} 
        alt="" />
    </li>
  );
}
