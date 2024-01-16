import React, { useEffect, useState } from 'react';
import { Text, View , StyleSheet } from 'react-native';

export default function ResponciveLaryout (){

    return(
        <View style={[styles.Box]}>
            <View style={[styles.Box1]}>
                <View style={styles.innerBox1}></View>
                <View style={styles.innerBox2}></View>
                <View style={styles.innerBox3}></View>
            </View>
            <View style={[styles.Box2]}></View>
            <View style={[styles.Box3]}></View>
        </View>
    )

};

const styles = StyleSheet.create({
    Box:{
        flex:1,
        backgroundColor:'green',
        
    },
    Box1:{
        flex:1,
        backgroundColor:'red',
        flexDirection:'row'
    },
    Box2:{
        flex:1,
        backgroundColor:'green',
    },
    Box3:{
        flex:1,
        backgroundColor:'blue',
    },
    innerBox1:{
        flex:1,
        backgroundColor:'yellow',
    },
    innerBox2:{
        flex:1,
        backgroundColor:'black',
    },
    innerBox3:{
        flex:1,
        backgroundColor:'orange',
    },
})


