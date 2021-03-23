import React from 'react';
import { Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const CustomButtom = ({ action, iconName, iconColor, title, bgColor }) => {

    // const { width } = Dimensions.get('window');

    return (
        <Button
            onPress={action}
            buttonStyle={{
                backgroundColor: bgColor,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                marginBottom: 5,
                width: "100%"               
                // width: width
            }}
            title={title}
            icon={
                <Icon
                    name={iconName}
                    size={15}
                    color={iconColor}
                    style={{
                        marginLeft: 5
                    }}                    
                />
            }
            text={title}
            iconRight={true}
        />
    );
}

export default CustomButtom
