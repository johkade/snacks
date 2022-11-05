import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {SketchesScreen} from '../screens';
import {SKETCHES} from './sketches';

const SketchStackNav = createSharedElementStackNavigator();

const sketches = [...SKETCHES.componentsArray, ...SKETCHES.showcasesArray].map(
  ([name, Comp]) => (
    <SketchStackNav.Screen
      component={Comp}
      name={name}
      key={name}
      sharedElements={(route, otherRoute, showing) => {
        const {name: id} = route.params;

        if (otherRoute.name === 'sketches') {
          return showing
            ? [
                {
                  id,
                  animation: 'fade-in',
                  // resize: 'auto',
                  // align: 'left-top',
                },
              ]
            : [
                {
                  id,
                  animation: 'fade-out',
                  // resize: 'auto',
                  // align: 'left-top',
                },
              ];
        }
      }}
    />
  ),
);

export const SketchStack = () => {
  return (
    <SketchStackNav.Navigator screenOptions={{headerShown: false}}>
      <SketchStackNav.Screen component={SketchesScreen} name={'sketches'} />
      {sketches}
    </SketchStackNav.Navigator>
  );
};
