import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View , Alert, StatusBar } from "react-native";

const ListWithUpdateDelBtn = () =>{
    const [data , setData] = useState([]);
    const getApiData = async ()=>{
        
        const url = "http://10.0.2.2:3000/api/data";
        let result = await fetch(url);
        result = await result.json();
        // console.warn(result);
        console.log(data);
        if(result){
            setData(result);
        }
    }
    useEffect(()=>{
        getApiData(); 
    })

    // const deleteUser =async (id)=>{
    //     const url = "http://127.0.0.1:8000/api/data";
    //     // console.warn(`${url}/${id}`);
    //     let result =await fetch(`${url}/${id}` ,{
    //         method:"delete",
    //     });
    //     result = await result.json();
    //     if(result){
    //         console.warn(('user deleted'));
    //         getApiData();
    //     }
    // }
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="green" />
            <View style={styles.dataWrapper}>
            <View style={{flex:1}}><Text style={{color:"white" , fontWeight:500, fontSize:24}}>Name</Text></View>
            <View style={{flex:1}}><Text style={{color:"white" , fontWeight:500, fontSize:24}}>Email </Text></View>
            <View style={{flex:2,alignItems:'center'}}><Text style={{color:"white" , fontWeight:500, fontSize:24}}>Action</Text></View>
            </View>
            {
                data.length ?
                data.map((item)=><View style={styles.dataWrapper}>
                    <View style={{flex:1}}><Text>{item.name}</Text></View>
                    <View style={{flex:1}}><Text>{item.email}</Text></View>
                    {/* <View style={{flex:1}}><Text>{item.email}</Text></View> */}
                    <View style={{flex:1}}><Button title="Update" /></View>
                    {/* <View style={{flex:1}}><Button title="Delete" onPress={()=>deleteUser(item.id)} /></View> */}
                </View>)
                :null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // top:20,
    },
    dataWrapper:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'orange',
        margin:5,
        padding:5,
        fontSize:10,
    }
})
    

export default ListWithUpdateDelBtn;