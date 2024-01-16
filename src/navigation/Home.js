import {Text , View , Button} from 'react-native';
export const Home =(props)=>{
    console.warn(props.route.params);
    const data = props.route.params;
    return(
        <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
            <Text style={{fontSize:30}}>Home Screen</Text>
            <Text style={{fontSize:16}}>Login Name :{data.name}</Text>
            <Text style={{fontSize:16}}>Login Email :{data.email}</Text>
        </View>
    )
}
