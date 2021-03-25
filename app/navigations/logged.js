import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"

import { Button, Image, View, Text } from 'react-native';

import HomeScreen from '../pages/Rest/Home';

///////////>> IMGS <<////////////
import Menu from '../../assets/list.png'
import Home from '../../assets/home.png'
import Profile from '../../assets/profile.png'
import Logo from '../../assets/logo.png'
import Logout from '../../assets/logout.png'

import styles from '../styles/drawerStyles'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackResto = ({ navigation }) => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            // headerLeft: ()=>(
            //     <Button primary padding color={"#f7b700"} marginHorizontal onPress={()=>{navigation.openDrawer()}}>
            //         <Image source={Menu} style={styles.img}/>
            //     </Button>
            // )
        }}
    >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />      
    </Stack.Navigator>
  );
}


/////////////>> DRAWER CONTENT AND STYLE <<//////////////
const DrawerContent = props => {
    // const dispatch = useDispatch()
    // const state = useSelector(state => state)
    // const [change, setChange] = useState('')

    return (
        <DrawerContentScrollView {...props}>

            {/*////////////>> IMG <</////////////////*/}
            <View flex={0.4} margin={20}>
                <Image source={Logo} style={styles.logo} resizeMode='center'/>
                <Text title>Resto App</Text>
                <Text size={9}>Come in and see</Text>
            </View>
            
            {/*////////////>> DRAWER ITEM LIST //////////////////*/}
            <View>
                <DrawerItem 
                    label="Home"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={Home} style={styles.img}/>)}}
                    // onPress={()=> props.navigation.navigate("Main", {change, setChange})}
                />

                <DrawerItem 
                    label="Profile"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={Profile} style={styles.img}/>)}}
                    // onPress={()=> props.navigation.navigate("MyProfile", {
                    //     myProfile: state.user,
                    //     editProfile: setChange
                    // })}
                />
            </View>

            {/*/////////////>> LOGOUT <<//////////////*/}
            <View>
                <DrawerItem 
                    label="Logout"
                    labelStyle = {{marginLeft: -20}}
                    icon={()=>{return (<Image source={Logout} style={styles.img}/>)}}
                    // onPress={()=> {
                    //     dispatch(logout())
                    //     props.navigation.navigate("Home")
                    // }}
                />
            </View>
        </DrawerContentScrollView>
    )
}



export default () => {
  return (
    <Drawer.Navigator
        initialRouteName="Home" 
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{width: "55%", backgroundColor: "#f7b700"}}
        contentContainerStyle={{flex: 1}}
        sceneContainerStyle={{backgroundColor: 'red'}}
        drawerContent={props => <DrawerContent {...props}/>}
    >

      <Drawer.Screen
        name="Home"
        component={StackResto}
        options={{ drawerLabel: 'Home' }}
      />
    </Drawer.Navigator>
  );
}