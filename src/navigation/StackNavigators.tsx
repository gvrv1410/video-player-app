import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ScreenName} from '../utils/screenConstants';
import {VideoList, VideoPreview} from '../screens/Video';

const Stack = createNativeStackNavigator();

const StackNavigation: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}
      initialRouteName={ScreenName.VIDEO}>
      <Stack.Screen
        name={ScreenName.VIDEO}
        component={VideoList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.VIDEO_PREVIEW}
        component={VideoPreview}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
