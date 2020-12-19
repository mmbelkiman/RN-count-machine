import React from 'react';
import {Platform, Text, View} from 'react-native';
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

  /**
   * Gets the header height based on the platform and props responsive logic
   * @returns {*}
   */
  function getHeaderHeight(): number {
    const HEADER_ANDROID_HEIGHT: number = 70;
    const HEADER_IOS_HEIGHT: number = 50;

    return Platform.OS === 'ios' ? HEADER_IOS_HEIGHT : HEADER_ANDROID_HEIGHT;
  }

  // render
  return (
    <View style={{...styles.container, height: getHeaderHeight()}}>
      {props.title ? renderTitle(props.title) : null}
    </View>
  );
};

CmHeader.propTypes = {
  title: PropTypes.string,
};

export default CmHeader;
