import {MotiView} from 'moti';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {Canvas, Circle as SkiaCircle, Group} from '@shopify/react-native-skia';
const size = 256;
const r = size * 0.33;

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
        <Canvas style={{height: 100, width: 100}}>
          <Group blendMode="multiply">
            <SkiaCircle cx={r} cy={r} r={r} color="cyan" />
            <SkiaCircle cx={size - r} cy={r} r={r} color="magenta" />
            <SkiaCircle cx={size / 2} cy={size - r} r={r} color="yellow" />
          </Group>
        </Canvas>
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
