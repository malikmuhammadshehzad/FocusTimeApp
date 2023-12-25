import darkColor from './darkColor';
import lightColor from './lightColor';

const COLORS = () => {
  currentColor = 'light';
  return currentColor === 'dark' ? darkColor : lightColor;
};

export default COLORS();