import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

const defaultHeaderOptions = {
  headerTintColor: '#FEFEFE',
  headerStyle: {
    backgroundColor: '#25292E',
  },
  headerTitleAlign: 'center' as 'center',
};

export default function RootLayout() {
  return (
    <>
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
    </>
  );
}
