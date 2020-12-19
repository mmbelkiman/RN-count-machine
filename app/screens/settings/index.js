import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import CmHeader from '../../components/cmHeader';
import * as strings from '../../res/strings';
import styles from './styles';
import CmButton from '../../components/cmButton';
import Counter from '../../models/Counter';
import {
  addCounter,
  loadFromArray,
  removeCounter,
  resetValue,
  subtractValue,
  sumValue,
} from '../../store/ducks/counter';
import {connect, useSelector} from 'react-redux';
import * as asyncStorageUtils from '../../utils/asyncStorageUtils';

const SettingsScreen = (props) => {
  const reduxCounters = useSelector((state) => state.counters);
  const reduxActiveCounter = useSelector((state) => state.activeCounter);

  const renderCountersBtn = () => {
    return (
      <View style={styles.containerRow}>
        <CmButton
          active={true}
          icon={'book-plus-multiple'}
          marginRight={20}
          title={strings.SETTINGS.BUTTON_ADD_COUNTER}
          onPress={() => {
            props.addCounter(new Counter());
          }}
        />
        <CmButton
          icon={'book-remove-multiple'}
          active={reduxCounters.length > 0}
          title={strings.SETTINGS.BUTTON_REMOVE_COUNTER}
          onPress={() => {
            props.removeCounter(reduxActiveCounter);
          }}
        />
      </View>
    );
  };

  const renderSelectedCounterBtn = () => {
    return (
      <View>
        <View style={styles.containerRow}>
          <CmButton
            icon={'pencil-plus'}
            active={reduxCounters.length > 0}
            marginRight={20}
            title={strings.SETTINGS.BUTTON_ADD_VALUE}
            onPress={() => {
              props.sumValue(reduxActiveCounter);
            }}
          />
          <CmButton
            icon={'pencil-minus'}
            active={reduxCounters.length > 0}
            title={strings.SETTINGS.BUTTON_REMOVE_VALUE}
            onPress={() => {
              props.subtractValue(reduxActiveCounter);
            }}
          />
        </View>
        <CmButton
          icon={'pencil-ruler'}
          active={reduxCounters.length > 0}
          title={strings.SETTINGS.BUTTON_RESET_VALUE}
          onPress={() => {
            props.resetValue(reduxActiveCounter);
          }}
        />
      </View>
    );
  };

  const renderBackupBtn = () => {
    return (
      <View style={styles.containerRow}>
        <CmButton
          icon={'database-export'}
          active={true}
          marginRight={20}
          title={strings.SETTINGS.SAVE_BACKUP}
          onPress={() => {
            asyncStorageUtils.setData(reduxCounters).then((data) => {});
          }}
        />
        <CmButton
          icon={'database-refresh'}
          active={true}
          title={strings.SETTINGS.LOAD_BACKUP}
          onPress={() => {
            asyncStorageUtils.getData().then((data) => {
              props.loadFromArray(data);
            });
          }}
        />
      </View>
    );
  };

  //Render
  return (
    <ScrollView style={styles.container}>
      <CmHeader title={strings.SETTINGS.HEADER} />

      <View style={styles.containerContent}>
        <View style={styles.containerRow}>
          <Text style={styles.title}>
            {strings.SETTINGS.COUNTERS_TITLE}{' '}
            <Text style={styles.titleTotal}>{reduxCounters.length}</Text>
          </Text>
        </View>

        {renderCountersBtn()}

        <Text style={styles.title}>
          {strings.SETTINGS.SELECTED_COUNTER_TITLE}{' '}
          <Text style={styles.titleTotal}>
            {reduxCounters.length > 0 ? reduxActiveCounter + 1 : '-'}
          </Text>
        </Text>

        <Text style={styles.titleValue}>
          Value{' '}
          {reduxCounters.length > 0
            ? reduxCounters[reduxActiveCounter].value
            : '-'}
        </Text>

        {renderSelectedCounterBtn()}

        <Text style={styles.title}>{strings.SETTINGS.LOCAL_STORAGE}</Text>

        {renderBackupBtn()}
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = {
  loadFromArray,
  addCounter,
  removeCounter,
  sumValue,
  subtractValue,
  resetValue,
};

export default connect(null, mapDispatchToProps)(SettingsScreen);
