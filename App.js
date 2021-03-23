import "react-native-gesture-handler";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Preloader from './app/components/Preloader';

import GuestNavigator from './app/navigations/guest';


export default function App() {

  const loading = true;

  return (
    <NavigationContainer>
      {
        loading
      ?  
        <GuestNavigator />             
      :
        <Preloader />
      }    
    </NavigationContainer>
  );
}