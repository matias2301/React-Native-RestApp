import "react-native-gesture-handler";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Preloader from './app/components/Preloader';
import useAuth from './app/hooks/useAuth'

import GuestNavigation from './app/navigations/guest';
import LoggedNavigation from './app/navigations/logged';


export default function App() {
  
  const { userLogged, loaded } = useAuth();
  console.log('-------------------------------------------')
  console.log(userLogged)

  return (
    <NavigationContainer>
      {
        !loaded
      ?  
        <Preloader />             
      : userLogged
        ?
        <LoggedNavigation />
        :
        <GuestNavigation />        
      }    
    </NavigationContainer>
  );
}