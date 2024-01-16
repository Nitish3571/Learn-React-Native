import React, { useState } from 'react';
import { Text, View , StyleSheet, ActivityIndicator, Button} from 'react-native';

export default function LoaderDemo (){
    const [show , setShow] = useState(false);
    const displayLoader =()=>{
        setShow(true);

        setTimeout(()=>{
            setShow(false)
        } , 5000);
    }

    return(
        <View style={[styles.main]}>
            <Text style={{fontSize:30}}>Activity Indicator</Text>
            {/* first method  */}
            <ActivityIndicator size={100} color={'blue'} animating={show} />
            {/* second method  */}
            {
                show ? <ActivityIndicator size={'large'} color={'blue'} animating={show} /> : null
            }
            <Button title='show loader' onPress={displayLoader} />
        </View>
    )

};

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    
})


