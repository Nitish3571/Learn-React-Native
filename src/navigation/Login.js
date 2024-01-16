import { useState } from 'react';
import {Text , View , Button, TextInput} from 'react-native';
export const Login =(props)=>{
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    return(
        <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
            <Text style={{fontSize:30}}>Login Screen</Text>
            <View style={{flexDirection:'row', alignItems:'center' }}>
            <Text style={{padding:20}}>Name:</Text>
            <TextInput style={{padding:5  , width:120, borderColor:'black' , borderWidth:1}} placeholder='Enter name' onChangeText={(text)=>setName(text)} />
            </View>
            <View style={{flexDirection:'row', alignItems:'center' }}>
            <Text style={{padding:20}}>Email:</Text>
            <TextInput style={{padding:5  , width:120, borderColor:'black' , borderWidth:1}} placeholder='Enter email' onChangeText={(text)=>setEmail(text)} />
            </View>
            <Button title="Go to Home Page" onPress={()=>props.navigation.navigate('Home' , {name ,email})} />
        </View>
    )
}