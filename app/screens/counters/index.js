import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import CmHeader from '../../components/cmHeader';
import * as strings from '../../res/strings';
import CmCountersCard from './cmCountersCard';
import styles from './styles';
import {connect, useSelector} from 'react-redux';
import {setActiveCounter} from '../../store/ducks/counter';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from '../../res/colors';
import * as sizes from '../../res/sizes';

const CountersScreen = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduxCounters = useSelector((state) => state.counters);

  const renderNoData = () => {
    return (
      <View style={styles.containerNoData}>
        <Text testId={'textNoData'} style={styles.textNoData}>
          {strings.COUNTERS.NO_DATA}
        </Text>
        <Icon
          name={'heart-broken'}
          color={colors.PRIMARY}
          size={sizes.ICON_SIZE_GIANT}
        />
      </View>
    );
  };

  //Render
  return (
    <View style={styles.container}>
      <CmHeader title={strings.COUNTERS.HEADER} />

      {reduxCounters.length === 0 ? renderNoData() : null}

      <FlatList
        data={reduxCounters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(data) => {
          return (
            <CmCountersCard
              index={data.index + 1}
              value={data.item.value}
              active={activeIndex === data.index}
              onPress={() => {
                setActiveIndex(data.index);
                props.setActiveCounter(data.index);
              }}
            />
          );
        }}
      />
    </View>
  );
};

const mapDispatchToProps = {setActiveCounter};

export default connect(null, mapDispatchToProps)(CountersScreen);
