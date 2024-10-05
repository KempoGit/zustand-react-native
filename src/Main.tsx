import React from 'react';
import { BottomTab } from './presentation/navigators/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};
