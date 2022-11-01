import {MotiView} from 'moti';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1000}}>
        <Text>Home 🎃</Text>
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
