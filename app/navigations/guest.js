import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import IndexScreen from '../pages/Index';
import LoginScreen from '../pages/Login';
import RegisterScreen from '../pages/Register';

const Stack = createStackNavigator();

export default function GuestNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='IndexScreen'
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#000',
        headerStyle: { 
            backgroundColor: 'tomato'           
        },
        headerTitleAlign: 'center',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}