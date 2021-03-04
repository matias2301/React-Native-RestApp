import React from 'react'
import { Dimensions, View, ActivityIndicator, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window');

const Preloader = () => {   

    return (
        <View style={styles.preloader}>            
            <ActivityIndicator
                style= {{height: 80}}
                size= "large"
                color= "#fff"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    preloader: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        backgroundColor: '#242935'
    }
});

export default Preloader
