import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const defaultHeaderOptions = {
  headerTintColor: '#FEFEFE',
  headerStyle: {
    backgroundColor: '#25292E',
  },
  headerShadowVisible: false,
  headerTitleAlign: 'center' as 'center',
  tabBarActiveTintColor: '#FFD33D',
  tabBarInactiveTintColor: '#FEFEFE',
  tabBarStyle: {
    backgroundColor: '#25292E',
  },
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        ...defaultHeaderOptions,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerTitle: 'Home',
          headerLeft: () => <></>,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              size={20}
              style={{ color: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          headerTitle: 'About',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'person-sharp' : 'person-outline'}
              size={20}
              style={{ color: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
