import React, { useState } from "react";
import { View , Text, TextInput , StyleSheet , secureTextEntry, Button, FlatList, ScrollView} from "react-native";


export default function FlatListDemo (){

    const UserData = [
        {
            id: 1,
            name: 'rana jee',
            age:'20',
            mobile:7070603571,
        },
        {
            id: 2,
            name: 'Nitish kumar',
            age:'20',
            mobile:8298687932,
        },
        {
            id: 3,
            name: 'Bittu Kumar',
            age:'18',
            mobile:9006832052,
        },
        {
            id: 4,
            name: 'Ratnesh Kumar',
            age:'15',
            mobile:9835854042,
        },
        {
            id: 5,
            name: 'Om Prakash',
            age:'21',
            mobile:9162402585,
        },
    ];


    return(
        <View>
        <View style ={{alignItems:'center' , top:200}}>
           <Text style={{fontSize:30}}>FlatList List</Text>
        </View>
        <View style ={{top:220 , padding:10 , backgroundColor:'blue' ,flexDirection:'row' , justifyContent:'space-between'}}>
            <Text style={{color:'white' , fontSize:20 }}>Name </Text>
            <Text style={{color:'white' , fontSize:20}}>Age</Text>
            <Text style={{color:'white' , fontSize:20}}>Mobile</Text>
        </View>

        {/* data fetch using props  */}
        <View style ={{top:220 , fontSize:30 , flexDirection:'row' , justifyContent:'space-between'}}>
        <FlatList 
            data={UserData}
            renderItem={({item}) => <Users item = {item} />
            
            }
        />
        </View>
        </View>
    )
};


// creating props components 
const Users = (props)=>{
    const items = props.item;
    return(

    <View style ={{borderWidth:1 , padding:10 , flexDirection:'row' , justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{color:'blue' }}>{items.name} </Text>
        <Text>{items.age}</Text>
        <Text>{items.mobile}</Text>
    </View>

    )
}

const styles = StyleSheet.create({

})
