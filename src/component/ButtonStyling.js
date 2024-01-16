import React, { useEffect, useState } from 'react';
import { Text, View , StyleSheet, Alert , TouchableHighlight } from 'react-native';

export default function ButtonStyling (){

    return(
        <View style={[styles.Box]}>
            <TouchableHighlight onPress={()=>Alert.alert('Success Button')}>
                <Text style={[styles.button]}>Success</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>Alert.alert('Primary Button')}>
                <Text style={[styles.button , styles.primary]}>Primary</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>Alert.alert('Secondary Button')}>
                <Text style={[styles.button , styles.secondary]}>Secondary</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>Alert.alert('Warning Button')}>
                <Text style={[styles.button , styles.warning]}>Warning</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>Alert.alert('Error Button')}>
                <Text style={[styles.button , styles.error]}>Error</Text>
            </TouchableHighlight>
        </View>
    )

};

const styles = StyleSheet.create({
    Box:{
        flex:1,
        marginTop:50,
    },
    button:{
        backgroundColor:'green',
        color:'white',
        textAlign:'center',
        fontSize:25,
        margin:10,
        padding:10,
        borderRadius:10,
        
    },
    primary:{backgroundColor:'blue'},
    secondary:{backgroundColor:'#00ccc0'},
    warning:{backgroundColor:'gold'},
    error:{backgroundColor:'red'},
    
})


