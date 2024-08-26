import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    weekday: 'long',
    ...options,
  };
  return new Intl.DateTimeFormat([], defaultOptions).format(date);
};

export const convertTemp = (temp, unit) => {
  if (unit === 'imperial') {
    return ((temp * 9) / 5 + 32).toFixed(1);
  }
  return temp.toFixed(1);
};
