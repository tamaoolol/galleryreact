import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers/reducers';
import MainScreen from '../screens/MainScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ImageScreen from '../screens/ImageScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList, FavoriteStackParamList } from './StackParamList';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const store = createStore(rootReducer);

export type StackParamList = {
  Main: undefined;
  Favorite: undefined;
  Image: { imageUrl: string };
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Image" component={ImageScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoriteScreen} />
      <Stack.Screen name="Image" component={ImageScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen
  name="Main"
  component={MainScreen}
  options={{
    tabBarLabel: 'Main',
    tabBarIcon: ({ color }) => <Icon name="image" color={color} size={24} />,
  }}
/>
<Tab.Screen
  name="Favorites"
  component={FavoriteScreen}
  options={{
    tabBarLabel: 'Favorites',
    tabBarIcon: ({ color }) => <Icon name="star" color={color} size={24} />,
  }}
/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigator;