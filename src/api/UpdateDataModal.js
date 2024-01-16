import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  StatusBar,
  Modal,
  TextInput,
} from "react-native";

const ListWithUpdateDelBtn = () => {
  const [data, setData] = useState([]);
  const [showModal, setModal] = useState(false);
  const [selectedUser, setSelecteduser] = useState(undefined);
  const getApiData = async () => {
    const url = "http://192.168.1.13:3000/users";
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    if (result) {
      setData(result);
    }
  };
  useEffect(() => {
    getApiData();
  });

  const deleteUser = async (id) => {
    const url = "http://192.168.1.13:3000/users";
    // console.warn(`${url}/${id}`);
    let result = await fetch(`${url}/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      console.warn("user deleted");
      getApiData();
    }
  };

  const updateUser = (data) => {
    setModal(true);
    setSelecteduser(data);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="green" />
      <View style={styles.dataWrapper}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "white", fontWeight: 500, fontSize: 24 }}>
            Name
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "white", fontWeight: 500, fontSize: 24 }}>
            Age
          </Text>
        </View>
        <View style={{ flex: 2, alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: 500, fontSize: 24 }}>
            Action
          </Text>
        </View>
      </View>
      {data.length
        ? data.map((item) => (
            <View style={styles.dataWrapper}>
              <View style={{ flex: 1 }}>
                <Text>{item.name}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{item.age}</Text>
              </View>
              {/* <View style={{flex:1}}><Text>{item.email}</Text></View> */}
              <View style={{ flex: 1 }}>
                <Button title="Update" onPress={() => updateUser(item)} />
              </View>
              <View style={{ flex: 1 }}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
            </View>
          ))
        : null}
      <Modal visible={showModal} transparent={true}>
        <UpdateModal setModal ={setModal} selectedUser={selectedUser} getApiData={getApiData}/>
      </Modal>
    </View>
  );
};

const UpdateModal = (props) => {
    const [name , setName] =useState(undefined);
    const [age , setAge] = useState(undefined);
    const [email , setEmail] = useState(undefined);
    const data = props.selectedUser;

    useEffect(()=>{
        if(data){
            setName(data.name);
            setEmail(data.email);
            setAge(data.age.toString())
        }
    },[data])

const updateUserData =async ()=>{
    console.warn(name , age , email , props.selectedUser.id);
    const url = "http://192.168.1.13:3000/users";
    console.warn(url);
    const id = props.selectedUser.id;
    let result = await fetch(`${url}/${id}`,{
        method:"put",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name , age , email})
    });
    result =await result.json();
    console.warn(result);
    if(result){
        console.warn(result);
        props.getApiData();
        props.setModal(false);
    }

}
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)} />
        <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)} />
        <TextInput style={styles.input} value={email}  onChangeText={(text)=>setEmail(text)} />
        <View style={{marginBottom:15}}><Button title="Update" onPress={()=>updateUserData()} /></View>
        <Button title="close" onPress={()=>props.setModal(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // top:20,
  },
  dataWrapper: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "orange",
    margin: 5,
    padding: 5,
    fontSize: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    elevation: 5,
  },
  input:{
    borderWidth:1,
    borderColor:'skyblue',
    width:300,
    marginBottom:15,
    paddingLeft:5,
  }
});

export default ListWithUpdateDelBtn;
