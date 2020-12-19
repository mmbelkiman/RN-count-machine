import React from 'react';
import {StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from './app/screens/settings';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import CountersScreen from './app/screens/counters';
import * as colors from './app/res/colors';
import * as sizes from './app/res/sizes';

import store from './app/store/ducks/store';

export default class App extends React.Component {
  HomeStack() {
    const Stack = createBottomTabNavigator();
    const options = {};
    return (
      <Stack.Navigator
        initialRouteName="Counters"
        tabBarOptions={{
          activeTintColor: colors.HIGHLIGHT,
          inactiveTintColor: colors.DISABLED,
          tabStyle: {
            backgroundColor: colors.PRIMARY,
          },
        }}>
        <Stack.Screen
          name="Counters"
          component={CountersScreen}
          options={{
            ...options,
            title: 'Counters',
            tabBarIcon: ({color}) => {
              return (
                <Icon name="counter" size={sizes.ICON_SIZE} color={color} />
              );
            },
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            ...options,
            title: 'Config',
            tabBarIcon: ({color}) => {
              return (
                <Icon
                  name="pencil-box-outline"
                  size={sizes.ICON_SIZE}
                  color={color}
                />
              );
            },
          }}
        />
      </Stack.Navigator>
    );
  }

  render() {
    const Stack = createStackNavigator();
    const options = {headerShown: false};

    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar backgroundColor={colors.PRIMARY} translucent={false} />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeStack">
              <Stack.Screen
                name="HomeStack"
                component={this.HomeStack}
                options={{
                  ...options,
                  gestureEnabled: false,
                  ...TransitionPresets.FadeFromBottomAndroid,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
