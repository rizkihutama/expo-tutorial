import React from 'react';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import GlobalStyles from './GlobalStyles';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Oops! Not Found.',
        }}
      />
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.text}>
          The page you're looking is not found.
        </Text>
        <Link href={'/'} style={[GlobalStyles.button, { marginTop: 20 }]}>
          Go back to home screen
        </Link>
      </View>
    </>
  );
}
