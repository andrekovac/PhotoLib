import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CounterScreen from '../screens/CounterScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="PhotoLib"
        component={HomeScreen}
        options={{
          title: 'Photos',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-image" />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-star" />,
        }}
      />
      <BottomTab.Screen
        name="Counter"
        component={CounterScreen}
        options={{
          title: 'Counter',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-pizza" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'PhotoLib':
      return 'Photo Library';
    case 'Counter':
      return 'Counter';
      case 'Favorites':
        return 'Favorites';
  }
}
