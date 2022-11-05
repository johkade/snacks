import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SketchLink} from '../components';
import {SKETCHES} from '../navigation/sketches';

export const SketchesScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <ScrollView
        style={[styles.scrollView]}
        contentContainerStyle={styles.content}>
        {SKETCHES.componentsArray.map(([name]) => (
          <SketchLink name={name} key={name} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
