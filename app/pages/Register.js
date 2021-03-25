import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Card } from "react-native-elements";

import { useForm, FormProvider } from 'react-hook-form';

import FormInput from '../components/FormInput';
import CustomButtom from '../components/CustomButtom';
import BackgroundImage from '../components/BackgroundImage';

import firebase from '../firebase/firebase';
import Toast from 'react-native-simple-toast';

import validations from '../utils/validations';
import styles from "../styles/loginStyles";

const Register = () => {

  const formMethods = useForm({
    mode: "onBlur"
  });  

  const onSubmit = async ( form ) => {

    try {
      await firebase.signup(form.username, form.email, form.password)
      .then(() => {
        Toast.showWithGravity("User created!", Toast.LONG, Toast.BOTTOM);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
          Toast.showWithGravity(errorMessage, Toast.LONG, Toast.BOTTOM);
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
        <ScrollView>
          <Card
            wrapperStyle={{paddingLeft: 10}}
            containerStyle={styles.cardContainer}
          >
          <Card.Title>Register</Card.Title>
          <Card.Divider/>
            <FormProvider {...formMethods}>
                <FormInput
                    name='username'
                    label='Username'                    
                    rules={validations.username}
                    index={0}
                />
                <FormInput
                    name='email'
                    label='Email'                    
                    rules={validations.email}
                    index={1}
                />
                <FormInput
                    name='password'
                    label='Password'                                   
                    secureTextEntry={true}
                    rules={validations.password}
                    index={2}
                />
                <FormInput
                    name='confirmPass'                    
                    label='Confirm Password'
                    secureTextEntry={true}
                    index={3}                                   
                    rules={{
                      required: {value: true, message: 'Password Confirmation is required'},
                      validate: {
                        matchPass: (value) => {
                          return (
                            Boolean(value === formMethods.watch('password')) ||
                            'Passwords do not match'                            
                          )
                        }                        
                      }
                    }}
                />

            </FormProvider>

            <CustomButtom
              bgColor="rgba(67, 67, 146, 0.7)"
              title="Register"
              action={formMethods.handleSubmit(onSubmit)}
              iconName="user-plus"
              iconSize={30}
              iconColor="#fff"
            />
            </Card>       
          </ScrollView>
      </BackgroundImage>
    </SafeAreaView>    
  );
};

export default Register