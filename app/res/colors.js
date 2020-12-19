import {Appearance} from 'react-native';
import * as colorsLight from './colorsLight';
import * as colorsDark from './colorsDark';

const colorScheme = Appearance.getColorScheme();
const isDark: boolean = colorScheme === 'dark';

const PRIMARY = isDark ? colorsDark.PRIMARY : colorsLight.PRIMARY;
const HIGHLIGHT = isDark ? colorsDark.HIGHLIGHT : colorsLight.HIGHLIGHT;
const BACKGROUND_INVERSE = isDark
  ? colorsDark.BACKGROUND_INVERSE
  : colorsLight.BACKGROUND_INVERSE;
const DISABLED = isDark ? colorsDark.DISABLED : colorsLight.DISABLED;
const TEXT = isDark ? colorsDark.TEXT : colorsLight.TEXT;
const TEXT_INVERSE = isDark
  ? colorsDark.TEXT_INVERSED
  : colorsLight.TEXT_INVERSED;
const BACKGROUND = isDark ? colorsDark.BACKGROUND : colorsLight.BACKGROUND;

export {
  TEXT,
  TEXT_INVERSE,
  PRIMARY,
  HIGHLIGHT,
  DISABLED,
  BACKGROUND_INVERSE,
  BACKGROUND,
};
