import { createEvent, createStore } from 'effector';

const getSavedLocations = () => JSON.parse(localStorage.getItem('locations'));

export const $favLocations = createStore(getSavedLocations() || []);

export const addFavLocation = createEvent();
export const delFavLocation = createEvent();

$favLocations.on(addFavLocation, (state, newLocation) => {
  if (state.some((location) => location.name === newLocation.name))
    return state;
  return [newLocation, ...state];
});
$favLocations.on(delFavLocation, (state, id) =>
  state.filter((loc) => loc.id !== id)
);

$favLocations.watch((locs) =>
  localStorage.setItem('locations', JSON.stringify(locs))
);
