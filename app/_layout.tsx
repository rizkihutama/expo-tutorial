import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const defaultHeaderOptions = {
  headerTintColor: '#FEFEFE',
  headerStyle: {
    backgroundColor: '#25292E',
  },
  headerTitleAlign: 'center' as 'center',
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Stack screenOptions={{ ...defaultHeaderOptions }}>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='+not-found'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
