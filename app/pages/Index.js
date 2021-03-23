import React from 'react';
import { View } from 'react-native';

import CustomButtom from '../components/CustomButtom';
import BackgroundImage from '../components/BackgroundImage';


const Index = ({ navigation }) => {

    const login = () => {
        navigation.navigate('Login')
    }

    const register = () => {
        
    }

    const gmail = () => {
        
    }
    
    return (
        <BackgroundImage
            source={require('../../assets/mainBg.png')}
        >
            <View
                style={{
                    justifyContent: 'center',
                    flex: 1
                }}            
            >
                <CustomButtom
                    bgColor="rgba(111, 38, 74, 0.7)"
                    title="Log In"
                    action={login}
                    iconName="sign-in"
                    iconSize={30}
                    iconColor="#fff"             
                />
                <CustomButtom
                    bgColor="rgba(200, 200, 50, 0.7)"
                    title="Register"
                    action={register}
                    iconName="user-plus"
                    iconSize={30}
                    iconColor="#fff"         
                />
                <CustomButtom
                    bgColor="rgba(67, 67, 146, 0.7)"
                    title="Login with Gmail"
                    action={gmail}
                    iconName="google"
                    iconSize={30}
                    iconColor="#fff"
                />            
            </View>
        </BackgroundImage>
    )
}

export default Index
