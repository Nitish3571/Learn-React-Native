import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View , StyleSheet , Button, Pressable} from 'react-native';

export default function PressableDemo (){
    const [hide , setHide] = useState(false);

    return(
        <View style={[styles.container]}>  
            <StatusBar 
                backgroundColor='orange'
                hidden={hide}
            />
            <Button title='Toggle Status Bar' onPress={()=>setHide(!hide)} />
            <Button title='Update Style' />

        </View>
    )

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    pressableBtn:{
        backgroundColor:'blue',
        color:'#fff',
        padding:10,
        margin:10,
        borderRadius:10,
        textAlign:'center',
    }
    
    
})


