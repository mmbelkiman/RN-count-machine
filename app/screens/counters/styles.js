import {StyleSheet} from 'react-native';
import * as colors from '../../res/colors';
import * as sizes from '../../res/sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.BACKGROUND,
  },
  containerNoData: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  textNoData: {
    color: colors.TEXT,
    fontSize: sizes.FONT_SIZE_2,
    fontWeight: 'bold',
  },
});
