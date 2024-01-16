import React from "react";
import { View , Text , StyleSheet, ScrollView, SectionList} from "react-native";

export default function CustomGridDemo (){
    const UserData = [
        {
            id: 1,
            name: 'rana jee',
            age:'20',
            mobile:7070603571,
            data:['React' , 'js' , 'core js' , 'php'],
        },
        {
            id: 2,
            name: 'Nitish kumar',
            age:'20',
            mobile:8298687932,
            data:['React' , 'js' , 'core js' , 'php'],
        },
        {
            id: 3,
            name: 'Bittu Kumar',
            age:'18',
            mobile:9006832052,
            data:['Laravel' , 'Javascript' , 'Css' , 'php'],
        },
        {
            id: 4,
            name: 'Ratnesh Kumar',
            age:'15',
            mobile:9835854042,
            data:['Node' , 'js' , 'Html' , 'php'],
        },
        {
            id: 5,
            name: 'Om Prakash',
            age:'21',
            mobile:9162402585,
            data:['Figma' , 'js' , 'Html' , 'Css'],
        },
        {
            id: 2,
            name: 'Nitish kumar',
            age:'20',
            mobile:8298687932,
            data:['ReactJs' , 'Laravel' , 'core Php' , 'Html'],
        },
    ];

    return(
        <View style={{top:70}}>
            <Text style={{fontSize:31 , textAlign:'center'}}>Section List</Text>
            <SectionList 
            sections={UserData}
            renderItem={({item}) => <Text style={{fontSize:20 , marginLeft:10}}>{item}</Text>}
            renderSectionHeader={({section:{name}})=><Text style={{fontSize:20,color:'red'}}>{name}</Text>}
            />
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
