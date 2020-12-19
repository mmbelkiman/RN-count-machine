import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as sizes from '../../res/sizes';
import * as colors from '../../res/colors';

const CmButton = (props) => {
  //Render
  return (
    <TouchableOpacity
      enabled={false}
      style={{
        ...styles.container,
        marginRight: props.marginRight ? props.marginRight : 0,
        // opacity: props.active ? 1 : 0.3,
      }}
      onPress={props.active ? props.onPress : null}>
      <Text style={styles.headerTitle}>{props.title}</Text>

      {props.icon ? (
        <Icon name={props.icon} color={colors.PRIMARY} size={sizes.ICON_SIZE} />
      ) : null}
    </TouchableOpacity>
  );
};

CmButton.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.string,
  marginRight: PropTypes.number,
  onPress: PropTypes.func,
};

export default CmButton;
