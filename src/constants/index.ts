import { ColorsInterface, SizesInterface } from '../interfaces';

export const sizes: SizesInterface = {
  sm: {
    width: 20,
    height: 20,
    fontSize: 12,
  },
  md: {
    width: 25,
    height: 25,
    fontSize: 14,
  },
  lg: {
    width: 30,
    height: 30,
    fontSize: 16,
  },
  xl: {
    width: 35,
    height: 35,
    fontSize: 18,
  },
};

export const colors: ColorsInterface = {
  primary: {
    text: '#fff',
    background: '#006FEE',
  },
  secondary: {
    text: '#fff',
    background: '#9353D3',
  },
  success: {
    text: '#000',
    background: '#17C964',
  },
  danger: {
    text: '#fff',
    background: '#F31260',
  },
  warning: {
    text: '#000',
    background: '#F5A524',
  },
  info: {
    text: '#fff',
    background: '#00C8FF',
  },
  default: {
    text: '#fff',
    background: '#3F3F46',
  },
  light: {
    text: '#000',
    background: '#fff',
  },
};
