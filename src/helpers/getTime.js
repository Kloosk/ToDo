import {format} from 'date-fns';

export const getTime = () => {
  const date = new Date();
  return format(date,"MMM d, yyyy");
};
