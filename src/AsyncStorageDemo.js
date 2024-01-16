import React, { useState } from "react";
import {View,Text, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


const AsyncStorageDemo = ()=>{
    const [name , setName] = useState("");
    const setData = async(text)=>{
        const jsonValue = JSON.stringify(text)
        await AsyncStorage.setItem("name" , jsonValue)
    }
    const getData =async()=>{
        let name = await AsyncStorage.getItem("name");
        name = JSON.parse(name);
        setName(name);
    }
    const removeData =async()=>{
        await AsyncStorage.removeItem("name");
        setName("");
    }
    return(
        <View style={{marginTop:50,alignItems:'center'}}>
            <Text style={{fontSize:20}}>AsyncStorage With React Native | {name}</Text>
            <Button title="Set Data" onPress={setData} />
            <Button title="Get Data" onPress={getData} />
            <Button title="Remove Data" onPress={removeData} />

            <View style={{width:300,margin:10}}>
                <TextInput value={name} onChangeText={(text)=>setName(text)} placeholder="Enter name" style={{borderWidth:1,borderColor:'black' , height:40,borderRadius:10, padding:10}} />
                </View>
            <Button title="Add Data" onPress={()=>setData(name)} />
        </View>
    )
}

export default AsyncStorageDemo;