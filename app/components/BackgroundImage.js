import React from 'react';
import { ImageBackground } from 'react-native';

const BackgroundImage = ({ source, children }) => {
    
    return (
        <ImageBackground
            source={source}
            style={{
                flex: 1,
                width: null,
                height: null
            }}
        >
            { children }    
        </ImageBackground>
    )
}

export default BackgroundImage