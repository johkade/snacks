import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStack} from './src/navigation';
// this is needed by moti
import 'react-native-reanimated';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
