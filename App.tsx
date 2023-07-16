import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/components/Home';
import VideoCall from './src/components/VideoCall';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VideoCall" component={VideoCall} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
