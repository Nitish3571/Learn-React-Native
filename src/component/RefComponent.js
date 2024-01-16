import React, { useEffect, useRef, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

const RefComponent = () =>{
    const input = useRef();
    const updateBtn = ()=>{
        console.warn("Hello");
        input.current.focus();
        input.current.setNativeProps({
            fontSize:24,
            color:'green',
        })
    }
    return(
        <View>
            <Text style={{fontSize:20 , marginTop:30 , textAlign:'center'}}>Ref Component</Text>
            <TextInput ref={input} placeholder={"Enter Name"} style={{borderWidth:1 , borderColor:'black' , margin:10 , borderRadius:5,padding:5}} />
            <TextInput placeholder={"Enter Password"} style={{borderWidth:1 , borderColor:'black' , margin:10 , borderRadius:5,padding:5}} />
            <Button title="Update Input" onPress={()=>updateBtn()} />
        </View>
    )
}

export default RefComponent;

