import {StyleSheet} from 'react-native';
import * as colors from '../../res/colors';
import * as sizes from '../../res/sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.BACKGROUND,
  },
  containerContent: {
    paddingHorizontal: sizes.PADDING,
  },
  containerRow: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  title: {
    paddingTop: 10,
    fontSize: sizes.FONT_SIZE_3,
    fontWeight: 'bold',
    color: colors.TEXT_INVERSE,
  },
  titleTotal: {
    fontSize: sizes.FONT_SIZE_3,
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
  titleValue: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: sizes.FONT_SIZE_3,
    color: colors.TEXT,
  },
});
