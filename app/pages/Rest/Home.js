import React from 'react'
import firebase from '../../firebase/firebase'
import { View, Text } from 'react-native';

import CustomButtom from '../../components/CustomButtom'

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <CustomButtom
              bgColor="rgba(67, 67, 146, 0.7)"
              title="Logout"
              action={() => firebase.logout()}
              iconName="sign-out"
              iconSize={30}
              iconColor="#fff"
            />
        </View>
    )
}

export default Home
