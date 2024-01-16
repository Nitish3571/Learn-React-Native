import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {WebView} from 'react-native-webview';
import { Text, View , StyleSheet , Button, Platform} from 'react-native';

export default function NpmInstallDemo (){
    const [hide , setHide] = useState(false);

    return(
        <WebView source={{uri:'https://nitish.iblogger.org/'}}></WebView>
        // <View style={[styles.container]}>  
        //     <Text style={{fontSize:30}}>Install Packege in Rn </Text>
        // </View>
    )

};

const styles = StyleSheet.create({
   
    
    
})


