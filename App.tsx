import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStack} from './src/navigation';
// this is needed by moti
import 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
