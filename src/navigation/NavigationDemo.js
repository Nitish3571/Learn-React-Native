import React from "react";
import {Text , View , Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Login } from "./Login";
import { Home } from "./Home";
const Stack = createNativeStackNavigator();
export default function NavigationDemo(){
    const btnAction=()=>{
        console.warn("btn Press");
    }
    return(
        <NavigationContainer>
            <StatusBar backgroundColor="green"/>
            <Stack.Navigator 
            screenOptions={{
                headerStyle:{
                    backgroundColor:'blue',
                },
                headerTintColor:{
                    backgroundColor:'orange'
                },
                headerTitleStyle:{
                    fontSize:25
                }
            }} 
            >
                <Stack.Screen name="Login" component={Login}
                 options={{
                    headerTitle:(props)=><Button onPress={btnAction} title="Left" />,
                    headerRight:()=><Header />,
                    title:"User Login",
                    headerStyle:{
                        backgroundColor:'orange',
                    },
                    headerTintColor:{
                        backgroundColor:'orange',
                    },
                    headerTitleStyle:{
                        fontSize:25
                    }
                }} 
                 />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Header =()=>{
    return(<Button title="btn" />)
}


