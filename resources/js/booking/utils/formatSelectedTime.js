import {format} from 'date-fns';

export const formatSelectedTime = (time) => {
  return format(time, 'dd.MM.yyyy HH:mm');
}