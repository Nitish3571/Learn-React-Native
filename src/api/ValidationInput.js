import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View , Alert } from "react-native";

const ValidationInput = () =>{
    const [name , setName] = useState("");
    const [age , setAge] = useState("");
    const [email , setEmail] = useState("");

    const [nameError , setNameError] = useState(false);
    const [ageError , setAgeError] = useState(false);
    const [emailError , setEmailError] = useState(false);

    const [alertBox , setAlertBoxModal] = useState(false);
    const [createTwoButtonAlert , setCreateTwoButtonAlert] = useState(false);

    const saveData =async ()=>{
        // validaion check 
        if(!name){
            setNameError(true)
        }else{
            setNameError(false)
        }

        if(!age){
            setAgeError(true)
        }else{
            setAgeError(false)
        }

        if(!email){
            setEmailError(true)
        }else{
            setEmailError(false)
        }

        if(!email || !age || !name){
            return false
        }

        

        console.warn("naxt");

        const url = 'http://192.168.1.13:3000/users';
        let result = await fetch(url , {
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name , age , email})
        })

        if(result){
            setName("");
            setAge("");
            setEmail("");
            setAlertBoxModal(true);
            // setCreateTwoButtonAlert(true)
        }
    }
    return(
        <View>
            
            <Text style={{fontSize:20 , marginTop:30 , textAlign:'center'}}>Post Api With Input Field Data </Text>
            <TextInput placeholder="Enter name" style={styles.inputField} value={name} onChangeText={(text)=>setName(text)} />
            {
                nameError ? <Text style={styles.errorMsg}>Please enter valid name</Text> : null
            }
            <TextInput placeholder="Enter age" style={styles.inputField} value={age} onChangeText={(text)=>setAge(text)} />
            {
                ageError ? <Text style={styles.errorMsg}>Please valid age</Text> : null
            }
            <TextInput placeholder="Enter email" style={styles.inputField} value={email} onChangeText={(text)=>setEmail(text)} />
            {
                emailError ? <Text style={styles.errorMsg}>Please valid email</Text> : null
            }
            <View style={{margin:10}}>
            <Button title="Submit" onPress={()=>saveData()} />
            </View>
            {
                alertBox ? <InsertDataMsg /> : null
            }
        </View>
    )
}

const InsertDataMsg = ()=>{
    return(
        <View style={styles.alertMsg}>
        <Text style={{fontSize:20}}>Submit Successfully</Text>
        <Button title="close" onPress={()=>setAlertBoxModal(false)} />
    </View>
    )
}

// using inbuilt alert button 
const CreateTwoButtonAlert = () =>{
    return(
        Alert.alert('Form', 'Submit Successfully', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
    )
}
    

const styles = StyleSheet.create({
    inputField:{
        borderWidth:1 , 
        borderColor:'black' ,
        margin:10 , 
        borderRadius:5,
        padding:5,
        marginTop:20,
    },
    errorMsg:{
        marginLeft:10,
        marginTop:-10,
        color:'red'

    },
    alertMsg:{
        backgroundColor:'#f2f2f2',
        height:100,
        width:300,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        margin:20,
        top:100,
    }
})

export default ValidationInput;