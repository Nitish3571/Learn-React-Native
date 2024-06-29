import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {WebView} from 'react-native-webview';
import { Text, View , StyleSheet , Button, Platform, SafeAreaView, ScrollView} from 'react-native';

export default function NpmInstallDemo (){
    const [hide , setHide] = useState(false);

    return(
        // <WebView source={{uri:'https://nitish.iblogger.org/'}}></WebView>
          <WebView 
            source={{ uri: 'https://nitish.iblogger.org/' }} 
            scalesPageToFit={false}
            android={{ 
                setBuiltInZoomControls: false, 
                setDisplayZoomControls: false 
            }}
            style={styles.container}
            // For iOS, we need to use the injectedJavaScript prop to disable zoom.
            injectedJavaScript={`
                const meta = document.createElement('meta'); 
                meta.setAttribute('name', 'viewport'); 
                meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'); 
                document.getElementsByTagName('head')[0].appendChild(meta);
            `}
        />
        // <View style={[styles.container]}>  
        //     <Text style={{fontSize:30}}>Install Packege in Rn </Text>
        // </View>
    )

};

const styles = StyleSheet.create({
    container: {
        top:20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

