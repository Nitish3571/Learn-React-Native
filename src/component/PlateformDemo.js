import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View , StyleSheet , Button, Platform} from 'react-native';

export default function PressableDemo (){
    const [hide , setHide] = useState(false);

    return(
        <View style={[styles.container]}>  
           <Text style={{fontSize:30}}>Plateform : {Platform.OS}</Text>
           {
            Platform.OS =='android' ? 
            <View style={{backgroundColor:'green' , height:100 , width:100}}></View>
            :
            <View style={{backgroundColor:'red' , height:100 , width:100}}></View>
           }

           <Text style={styles.text}>Hello</Text>
           <Text style={{fontSize:20}}>{JSON.stringify(Platform.constants.Brand)}</Text>

        </View>
    )

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    text:{
        color:Platform.OS=="android"? 'orange':'blue',
        fontSize:20,
    }
    
    
})


