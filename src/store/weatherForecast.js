import { createEffect, combine, restore } from 'effector';
import { SERVER_URL, API_KEY } from '../shared/constants';

export const getWeatherForecastFx = createEffect(async (location) => {
  const url = `${SERVER_URL}/forecast?q=${location}&appid=${API_KEY}&units=metric&lang=ru`;
  const response = await fetch(url);
  return response.json();
});

const $weatherForecastData = restore(getWeatherForecastFx.doneData, {});
const $weatherForecastErr = restore(getWeatherForecastFx.failData, null);

export const $weatherForecast = combine({
  loading: getWeatherForecastFx.pending,
  error: $weatherForecastErr,
  $locationName: $weatherForecastData.map(state => state.city?.name),
  $timezone: $weatherForecastData.map(state => state.city?.timezone),
  $forecastList: $weatherForecastData.map(state => state.list)
})

$weatherForecastData.watch((data) => console.log(data));