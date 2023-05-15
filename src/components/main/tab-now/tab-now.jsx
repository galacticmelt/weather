import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { $weatherNow } from '../../../store/weatherNow';
import { makeFavIcon, isFavIcon } from '../../../assets/images';
import {
  $favLocations,
  addFavLocation,
  delFavLocation,
} from '../../../store/localStorage';
import './tab-now.css';

function TabNow() {
  const { loading, error, $locationName, $temperature, $icon } = useStore($weatherNow);
  const favLocations = useStore($favLocations);
  const [currentLocFav, setCurrentLocFav] = useState(null);

  useEffect(() => {
    const checkCurrentLoc = favLocations.find(
      (loc) => loc.name === $locationName
    );
    if (checkCurrentLoc) {
      setCurrentLocFav(checkCurrentLoc.id);
      return;
    }
    setCurrentLocFav(null);
  }, [$locationName, favLocations]);

  const handleToggleFav = (id) => {
    if (currentLocFav) {
      return () => {
        delFavLocation(id);
        setCurrentLocFav(null);
      };
    }
    return () => addFavLocation({ id: uuid(), name: $locationName });
  };

  if (loading) {
    return <section className="loading">Loading...</section>;
  }
  if (error) {
    throw new Error(error);
  }
  return (
    <section className="tab-now">
      <div className="now-temperature">{$temperature}&#176;</div>
      <img
        className="now-weather-icon"
        src={`http://openweathermap.org/img/wn/${$icon}@4x.png`}
        alt=""
      />
      <div className="location-and-fav-icon">
        <div className="now-location">{$locationName}</div>
        <input
          type="image"
          className="now-favorite-icon"
          src={currentLocFav ? isFavIcon : makeFavIcon}
          alt=""
          onClick={handleToggleFav(currentLocFav)}
        />
      </div>
    </section>
  );
}

export default TabNow;
