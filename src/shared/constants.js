export const ELEMENTS_TYPES = {
  INPUT: {
    text: 'text',
    checkbox: 'checkbox',
    image: 'image',
  },
};

export const SERVER_URL = 'https://api.openweathermap.org/data/2.5';

export const API_KEY = import.meta.env.VITE_API_KEY;

export const STORAGE_KEY = {
  CITIES: 'cities',
};

export const DEFAULT_CITY = 'Москва';

export const EMPTY_INPUT = '';

export const MODAL_PURPOSE = {
  ABOUT: {
    title: 'Weather App',
    message: `Этот небольшой сервис позволяет 
              ознакомиться с информацией о погоде.
              Для поиска необходимой локации воспользуйтесь полем ввода
              вверху приложения. Во вкладке "Now" отображается краткая информация
              о погоде в выбранном месте на данный момент. Более детально погодные условия описаны
              во вкладке "Details". В третьей вкладке, "Forecast", вы можете
              ознакомиться с прогнозом на ближайшие несколько дней. `,
  },
};
