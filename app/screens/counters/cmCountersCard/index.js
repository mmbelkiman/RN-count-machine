import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import * as strings from '../../../res/strings';

const CmCountersCard = (props) => {
  function getOpacity() {
    return props.active ? 1 : 0.5;
  }

  //Render
  return (
    <View style={{...styles.container, opacity: getOpacity()}}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.title}>
          {strings.COUNTERS_CARD.TITLE}
          {props.index}
        </Text>
        <Text style={styles.value}>
          {props.value.toString().padStart(4, '0')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

CmCountersCard.propTypes = {
  index: PropTypes.number,
  value: PropTypes.number,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

export default CmCountersCard;
