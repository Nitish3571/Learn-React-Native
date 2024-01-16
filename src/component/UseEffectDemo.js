import React, { useEffect, useState } from 'react';
import { Button, Text, View  } from 'react-native';

export default function CustomGridDemo (){
    const [count , setCount] = useState(0);
    const [data , setData] = useState(0);

    // useEffect(()=>{ 
    //     console.warn('Hello' + count);
    // },[count])

    // useEffect(()=>{ 
    //     console.warn('Hello' + data);
    // },[data])

    return(
        <View style={{top:70}}>
            <Text style={{fontSize:31 , textAlign:'center'}}>Use Effect Cout {count}</Text>
            <Text style={{fontSize:31 , textAlign:'center'}}>data Cout {data}</Text>
            <Button title="UpdateCount" onPress={()=>setCount(count+1)}></Button>
            <Button title="UpdateData" onPress={()=>setData(data+2)}></Button>
            <User info={{count , data}}/>
        </View>
    )

};

const User = (props)=>{
    const data = props.info;

    useEffect(()=>{
        console.warn('Props' + props.info.data)
    },[props.info.data])
    return(
        <View>
            <Text style={{fontSize:30, color:'orange'}}>Data : {props.info.data}</Text>
            <Text style={{fontSize:30, color:'orange'}}>Count : {props.info.count}</Text>
        </View>
    )
}

