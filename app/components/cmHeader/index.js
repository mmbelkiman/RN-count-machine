import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const CmHeader = (props) => {
  /**
   * Renders the title
   * @returns {*}
   */
  function renderTitle(title: string): View {
    return (
      <Text style={styles.headerTitle} numberOfLines={1}>
        {title}
      </Text>
    );
  }

  // render
  return (
    <View style={styles.container}>
      {props.title ? renderTitle(props.title) : null}
    </View>
  );
};

CmHeader.propTypes = {
  title: PropTypes.string,
};

export default CmHeader;
