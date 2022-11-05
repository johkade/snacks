import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

export interface SketchLinkProps {
  name: string;
}

export const SketchLink = ({name}: SketchLinkProps) => {
  const navigation = useNavigation();
  return (
    <SharedElement id={name}>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          //   @ts-ignore
          onPress={() => navigation.push(name, {name})}
          style={styles.container}>
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      </View>
    </SharedElement>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: '#345',
    height: 128,
    margin: 8,
    borderRadius: 8,
    shadowRadius: 20,
    shadowColor: '#123',
    shadowOpacity: 0.5,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  imgBg: {flex: 1},
});
