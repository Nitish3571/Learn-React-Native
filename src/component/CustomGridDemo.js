import React from "react";
import { View , Text , StyleSheet, ScrollView} from "react-native";

export default function CustomGridDemo (){
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
        <View style={{top:70}}>
            <Text style={{fontSize:31 , textAlign:'center'}}>Grid with Dynamic Data</Text>
            <ScrollView style={{color:'black'}}>
            <View style={{flex:1 , flexDirection:'row' , flexWrap:'wrap'}}>
                {
                    UserData.map((items)=>
                        <Text style={[styles.item]}>{items.name}</Text>
                    )
                }
                
            </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    item:{
        fontSize:25,
        backgroundColor:'blue',
        color:'#fff',
        margin:5,
        padding:5,
        width:120,
        height:120,
        textAlignVertical:'center',
        textAlign:'center',
    }
})
