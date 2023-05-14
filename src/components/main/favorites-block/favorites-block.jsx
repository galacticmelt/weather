import { useStore } from 'effector-react';
import { useScrollPosition } from '../../../shared/hooks';
import { closeIcon, arrowIcon } from '../../../assets/images';
import { getWeatherNowFx } from '../../../store/weatherNow';
import { getWeatherForecastFx } from '../../../store/weatherForecast';
import { $favLocations, delFavLocation } from '../../../store/localStorage';
import './favorites-block.scss';

function FavoritesBlock() {
  const favLocations = useStore($favLocations);
  const [isOnTop, isAtBottom, handleScroll] = useScrollPosition()

  function handleFetchLocation(location) {
    getWeatherNowFx(location);
    getWeatherForecastFx(location)
  }
  const handleDelFavLocation = (id) => {
    delFavLocation(id);
  };

  return (
    <div className="favorites-block">
      <div className="favorites-title">
        <span>Added Locations:</span>
      </div>
      {/* <div className='arrow-wrapper'>
        <img src={arrowIcon} alt='' className={!isOnTop ? 'arrow-up visible' : 'arrow-up'}/>
      </div> */}
      <div className='favorites-list'>
        <ul onScroll={handleScroll}>
          {favLocations &&
            favLocations.map((location) => (
              <li key={location.id}>
                <span
                  onClick={() => handleFetchLocation(location.name)}
                  onKeyDown={() => handleFetchLocation(location.name)}
                  role="button"
                  tabIndex={0}
                >
                  {location.name}
                </span>
                <input
                  className="delete-fav-icon"
                  type="image"
                  src={closeIcon}
                  alt=""
                  onClick={() => handleDelFavLocation(location.id)}
                  onKeyDown={() => handleDelFavLocation(location.id)}
                />
              </li>
            ))}
        </ul>
      </div>
      {/* <div className='arrow-wrapper'>
        <img src={arrowIcon} alt='' className={!isAtBottom ? 'arrow-down visible' : 'arrow-down'}/>
      </div> */}
    </div>
  );
}

export default FavoritesBlock;
