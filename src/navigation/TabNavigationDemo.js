import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View , StyleSheet , Button, Modal} from 'react-native';
const Tab = createBottomTabNavigator();
export default function TabNavigationDemo(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name='SignUp' component={SignUp} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const Login =()=>{
    return(<View>
        <Text>Login</Text>
        
    </View>)
}

const SignUp =()=>{
    return(<View>
        <Text>SignUp</Text>
    </View>)
}