import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

const PostApiInput = () =>{
    const [name , setName] = useState("");
    const [age , setAge] = useState("");
    const [email , setEmail] = useState("");

    const saveData =async ()=>{
        console.warn(name);
        console.warn(age);
        console.warn(email);

        const url = 'http://192.168.1.13:3000/users';
        let result = await fetch(url , {
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name , age , email})
        })
    }
    return(
        <View>
            <Text style={{fontSize:20 , marginTop:30 , textAlign:'center'}}>Post Api With Input Field Data </Text>
            <TextInput placeholder="Enter name" style={{borderWidth:1 , borderColor:'black' , margin:10 , borderRadius:5,padding:5}} value={name} onChangeText={(text)=>setName(text)} />
            <TextInput placeholder="Enter age" style={{borderWidth:1 , borderColor:'black' , margin:10 , borderRadius:5,padding:5}} value={age} onChangeText={(text)=>setAge(text)} />
            <TextInput placeholder="Enter email" style={{borderWidth:1 , borderColor:'black' , margin:10 , borderRadius:5,padding:5}} value={email} onChangeText={(text)=>setEmail(text)} />
            <View style={{margin:10}}>
            <Button title="Submit" onPress={()=>saveData()} />
            </View>
        </View>
    )
}

export default PostApiInput;