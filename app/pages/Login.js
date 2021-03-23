import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Card } from "react-native-elements";

import { useForm, FormProvider } from 'react-hook-form';

import FormInput from '../components/FormInput';
import CustomButtom from '../components/CustomButtom';
import BackgroundImage from '../components/BackgroundImage';

import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';

import validations from '../utils/validations';
import styles from "../styles/loginStyles";

const Login = () => {

  const formMethods = useForm();  

  const onSubmit = form => {

    try {
      firebase.auth().signInWithEmailAndPassword(form.email, form.password)
      .then(() => {
        Toast.showWithGravity("Welcome", Toast.LONG, Toast.BOTTOM);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if( errorCode === 'auth/wrong-password' ){
          Toast.showWithGravity("Verify your credentials", Toast.LONG, Toast.BOTTOM);
        } else {
          Toast.showWithGravity(errorMessage, Toast.LONG, Toast.BOTTOM);
        }
      });
    } catch (error) {
      Toast.showWithGravity("Something went wrong", Toast.LONG, Toast.BOTTOM);
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <BackgroundImage
        source={require('../../assets/mainBg.png')}
      >
        <View>
          <Card
            wrapperStyle={{paddingLeft: 10}}
            containerStyle={styles.cardContainer}
          >
          <Card.Title>Enter Email and Password</Card.Title>
          <Card.Divider/>
            <FormProvider {...formMethods}>
              <FormInput
                name='email'
                label='Email'
                rules={validations.email}
              />
              <FormInput
                name='password'
                label='Password'
                secureTextEntry={true}
                rules={validations.password}
              />
            </FormProvider>

            <CustomButtom
              bgColor="rgba(67, 67, 146, 0.7)"
              title="Login"
              action={formMethods.handleSubmit(onSubmit)}
              iconName="sign-in"
              iconSize={30}
              iconColor="#fff"
            />
            </Card>       
        </View>
      </BackgroundImage>
    </SafeAreaView>    
  );
};

export default Login