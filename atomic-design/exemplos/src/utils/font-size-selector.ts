import { FontSizeType } from '../common/types';

export default function fontSizeSelector(size: FontSizeType = 'small'): string {
  const fontSize = {
    small: '1rem',
    medium: '1.5rem',
    large: '2.25rem',
    'extra-large': '3rem',
  };

  return fontSize[size];
}
