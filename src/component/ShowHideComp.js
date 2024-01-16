import React, { useEffect, useState } from 'react';
import { Button, Text, View  } from 'react-native';

export default function CustomGridDemo (){
    const [show , setShow] = useState(true);

    return(
        <View style={{top:70}}>
            <Text style={{fontSize:31 ,margin:10, textAlign:'center'}}> Hide Component</Text>
            <Button style={{margin:10 , color:'red'}} title='Hide Component'  onPress={()=>setShow(false)} />

            <Text style={{fontSize:31 ,margin:10, textAlign:'center'}}>Show Component</Text>
            <Button title='Show Component' style={{margin:10}} onPress={()=>setShow(true)} />

            <Text style={{fontSize:31 ,margin:10, textAlign:'center'}}>Toggle Component</Text>
            <Button title='Show Component' style={{margin:10}} onPress={()=>setShow(!show)} />
            {
                show ? <User /> : null
            }

        </View>
    )

};

const User = ()=>{
    // let timer = setInterval(()=>{
    //     console.warn("Timer called");
    // } , 2000);
 
    // useEffect(()=>{
    //     // return()=>clearInterval(timer);
    // })
    return(
        <View>
            <Text style={{fontSize:30, color:'orange'}}>User Component</Text>
        </View>
    )
}



