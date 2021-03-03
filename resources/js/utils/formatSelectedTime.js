import {format} from 'date-fns';

export const formatSelectedTime = (time, pattern = 'dd.MM.yyyy HH:mm') => {
  return format(time, pattern);
}