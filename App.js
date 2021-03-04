import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButtom from './app/components/CustomButtom';
import Preloader from './app/components/Preloader';
import BackgroundImage from './app/components/BackgroundImage'

export default function App() {

  const loading = true;

  return (
    <BackgroundImage
      source={require('./assets/mainBg.png')}
    >
      {
        loading
        ?  
          <>        
            <Text>Open up App.js to start working on your app!</Text>

            <CustomButtom
              bgColor="rgba(220, 100, 20, 0.7)"
              title="Custom Buttom"
              action={() => console.log('test')}
              iconName="sign-in"
              iconSize={30}
              iconColor="#fff"
            />
          </>                
      :
        <Preloader />
      }
    </BackgroundImage>
  );
}