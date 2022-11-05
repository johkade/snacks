import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SketchStack} from '../sketch';

const RootStackNav = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <RootStackNav.Navigator screenOptions={{headerShown: false}}>
      <RootStackNav.Screen component={SketchStack} name={'sketch'} />
    </RootStackNav.Navigator>
  );
};
