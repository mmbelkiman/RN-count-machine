import {StyleSheet} from 'react-native';
import * as colors from '../../res/colors';
import * as sizes from '../../res/sizes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY,
    width: '100%',
    height: 70
  },
  headerTitle: {
    color: colors.TEXT,
    fontSize: sizes.FONT_SIZE_2,
    fontWeight: 'bold',
    width: '90%',
    paddingLeft: 10,
    paddingTop: 28,
  },
});
