import { useStore } from 'effector-react';
import { v4 as uuid } from 'uuid';
import { $weatherNow } from '../../../store/weatherNow';
import { extractTime } from '../../../shared/helpers';
import './tab-details.css';

function TabDetails() {
  const {
    loading,
    error,
    $weather,
    $temperature,
    $feelsLike,
    $locationName,
    $sunrise,
    $sunset,
    $timezone
  } = useStore($weatherNow);

  const detailsList = [
    ['Temperature', $temperature + String.fromCharCode(176)],
    ['Feels like', $feelsLike + String.fromCharCode(176)],
    ['Weather', $weather],
    ['Sunrise', extractTime($sunrise, $timezone)],
    ['Sunset', extractTime($sunset, $timezone)],
  ];

  if (loading) {
    return <section className="loading">Loading...</section>;
  }
  if (error) {
    throw new Error(error);
  }
  return (
    <section className="tab-details">
      <div className="details-location">{$locationName}</div>
      <ul>
        {detailsList.map((detail) => (
          <li key={uuid()}>
            {detail[0]}: <span>{detail[1]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TabDetails;
