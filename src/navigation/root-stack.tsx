import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../features/home';

const RootStackNav = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <RootStackNav.Navigator screenOptions={{headerShown: false}}>
      <RootStackNav.Screen component={HomeScreen} name={'home'} />
    </RootStackNav.Navigator>
  );
};
