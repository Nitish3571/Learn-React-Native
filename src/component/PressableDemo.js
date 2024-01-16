import React, { useState } from 'react';
import { Text, View , StyleSheet , Button, Pressable} from 'react-native';

export default function PressableDemo (){
    const [showModal , setShowModal] = useState(false);

    return(
        <View style={[styles.main]}>  
            <Pressable 
            onPress={()=>console.warn('normal on press')}
            onLongPress={()=>console.warn('Long press')}
            onPressIn={()=>console.warn('In press')}
            onPressOut={()=>console.warn('Out press')}
            delayLongPress={1000}
            >
                <Text style={styles.pressableBtn}>Pressable</Text>
            </Pressable>
        </View>
    )

};

const styles = StyleSheet.create({
    main:{
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


