import {StyleSheet} from 'react-native';
import * as colors from '../../res/colors';
import * as sizes from '../../res/sizes';

export default StyleSheet.create({
  container: {
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
    shadowColor: colors.TEXT_INVERSE,
    elevation: 10,
    backgroundColor: colors.BACKGROUND_INVERSE,
    flex: 1,
    minHeight: 10,
    alignItems: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    color: colors.PRIMARY,
    fontSize: sizes.FONT_SIZE_3,
  },
});
