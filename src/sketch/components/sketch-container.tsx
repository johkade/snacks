import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';

export interface SketchContainerProps extends ViewProps {
  name?: string;
}

export const SketchContainer = ({
  name,
  children,
  ...other
}: SketchContainerProps) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {paddingTop: top}]} {...other}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
        <Text style={styles.text}>{'◀︎ back'}</Text>
      </TouchableOpacity>
      <SharedElement id={name ?? ''} style={styles.sharedElm}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{name}</Text>
          <View style={styles.childrenContainer}>{children}</View>
        </View>
      </SharedElement>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  backButton: {marginBottom: 12},
  imgBg: {
    ...StyleSheet.absoluteFillObject,
  },
  wrapper: {
    backgroundColor: '#345',
    minHeight: 200,
    borderRadius: 32,
    padding: 12,
  },
  sharedElm: {flex: 1},

  text: {
    color: 'white',
    fontSize: 18,
  },
  childrenContainer: {flex: 1, marginTop: 12},
});
