import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeScreen = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
