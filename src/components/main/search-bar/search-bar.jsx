import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { searchIcon, questionIcon } from '../../../assets/images';
import { ELEMENTS_TYPES } from '../../../shared/constants';
import { getWeatherNowFx } from '../../../store/weatherNow';
import { getWeatherForecastFx } from '../../../store/weatherForecast';
import './search-bar.css';

function SearchBar() {
  const input = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const { current } = input
    if (!current.value) {
      return;
    }
    getWeatherNowFx(current.value);
    getWeatherForecastFx(current.value);
    current.value = '';
  }

  return (
    <div className="search-wrapper">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-icon"
          type={ELEMENTS_TYPES.INPUT.image}
          src={searchIcon}
        />
        <input
          type={ELEMENTS_TYPES.INPUT.text}
          ref={input}
        />
      </form>
      <Link to="about">
        <input
          className="question-icon"
          type={ELEMENTS_TYPES.INPUT.image}
          src={questionIcon}
        />
      </Link>
    </div>
  );
}

export default SearchBar;
