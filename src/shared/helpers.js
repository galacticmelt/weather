import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const extractTime = (timestamp, zone) => {
  return dayjs(timestamp * 1000)
    .utc()
    .utcOffset(zone / 3600)
    .format('HH:mm');
}

export const extractDate = (timestamp, zone) => {
  return dayjs(timestamp * 1000)
    .utc()
    .utcOffset(zone / 3600)
    .format('MMM D');
}
