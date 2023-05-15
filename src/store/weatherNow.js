import { createEffect, combine, restore } from 'effector';
import { SERVER_URL, API_KEY } from '../shared/constants';

export const getWeatherNowFx = createEffect(async (location) => {
  const url = `${SERVER_URL}/weather?q=${location}&appid=${API_KEY}&units=metric&lang=ru`;
  const response = await fetch(url);
  return response.json();
});

const $weatherNowData = restore(getWeatherNowFx.doneData, {});
const $weatherNowErr = restore(getWeatherNowFx.failData, null);

export const $weatherNow = combine({
  loading: getWeatherNowFx.pending,
  error: $weatherNowErr,
  $locationName: $weatherNowData.map((state) => state.name),
  $temperature: $weatherNowData.map((state) => state.main?.temp),
  $feelsLike: $weatherNowData.map((state) => state.main?.feels_like),
  $weather: $weatherNowData.map((state) => state.weather?.[0].main),
  $sunrise: $weatherNowData.map((state) => state.sys?.sunrise),
  $sunset: $weatherNowData.map((state) => state.sys?.sunset),
  $timezone: $weatherNowData.map((state) => state.timezone),
  $icon: $weatherNowData.map((state) => state.weather?.[0].icon)
});

$weatherNowData.watch((data) => console.log(data));
