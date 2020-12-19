import {StyleSheet} from 'react-native';
import * as colors from '../../../res/colors';
import * as sizes from '../../../res/sizes';

export default StyleSheet.create({
  container: {
    borderColor: colors.PRIMARY,
    borderWidth: 2,
    borderRadius: 2,
    padding: 10,
    margin: 10,
    shadowColor: colors.TEXT_INVERSE,
    elevation: 10,
    backgroundColor: colors.BACKGROUND_INVERSE,
  },
  title: {
    fontSize: sizes.FONT_SIZE_3,
    color: colors.DISABLED,
    fontWeight: 'bold',
  },
  value: {
    paddingVertical: 12,
    fontSize: sizes.FONT_SIZE_1,
    color: colors.TEXT_INVERSE,
    width: '100%',
    textAlign: 'right',
    fontWeight: 'bold',
  },
});
