import React from 'react';
import {Text} from 'react-native';
import {SketchContainer} from '../../sketch/components';

export const TestScreen = ({route}: {route: any}) => {
  const name = route?.params?.name;
  console.log(route?.params);
  return (
    <SketchContainer name={name}>
      <Text />
    </SketchContainer>
  );
};
