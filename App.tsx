import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from '~/navigation';
import {navigationRef} from '~/navigation/root-navigation';

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
