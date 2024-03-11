import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigators';

const AppNavigators: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default AppNavigators;
