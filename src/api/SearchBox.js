import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

const PostApiInput = () =>{
    const [data , setData] = useState([]);
    const searchUser =async (text)=>{
        const url = `http://192.168.1.13:3000/users?q=${text}`;
        console.warn(url);
        let result = await fetch(url);
        result =await result.json();
        console.warn(result);
        if(result){
            console.warn(result);
            setData(result);
        }
    }
    return(
        <View>
            <Text style={{fontSize:20 , marginTop:30 , textAlign:'center'}}>Search Box</Text>
            <TextInput placeholder={"Search"} style={{borderWidth:1 , borderColor:'black' , margin:10 , borderRadius:5,padding:5}}  
            onChangeText={(text)=>searchUser(text)}
            />
            {
                data.length ?
                data.map((item)=><View>
                    <Text>{item.name}</Text>
                </View>)
                :null
            }
        </View>
    )
}

export default PostApiInput;

// problems not searching box working 