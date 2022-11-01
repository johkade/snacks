import {MotiView} from 'moti';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import Swipeable from 'react-native-gesture-handler/Swipeable';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1000}}>
        <Swipeable renderLeftActions={() => <Text>hello</Text>}>
          <Text>Home 🎃</Text>
        </Swipeable>
        <Svg height="100" width="100" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
        </Svg>
      </MotiView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
