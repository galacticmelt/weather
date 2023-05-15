import { React, useEffect } from 'react';
import SearchBar from './search-bar/search-bar';
import TabsBlock from './tabs-block/tabs-block';
import FavoritesBlock from './favorites-block/favorites-block';
import { DEFAULT_CITY } from '../../shared/constants';
import { getWeatherNowFx } from '../../store/weatherNow';
import { getWeatherForecastFx } from '../../store/weatherForecast';
import './main.css';

function Main() {
  useEffect(() => {
    getWeatherNowFx(DEFAULT_CITY);
    getWeatherForecastFx(DEFAULT_CITY);
  }, []);

  return (
    <main>
      <SearchBar />
      <div className="tabs-and-favorites">
        <TabsBlock />
        <FavoritesBlock />
      </div>
    </main>
  );
}

export default Main;
