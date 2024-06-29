import React, { useState } from "react";
import { View , Text, TextInput , StyleSheet , secureTextEntry, Button} from "react-native";


export default function Form (){
    const [firstName , SetFirstName] = useState('');
    const [lastName , SetLastName] = useState('');
    const [email , SetEmail] = useState('');
    const [password , SetPassword] = useState('');
    const [cpassword , SetCPassword] = useState('');
    const [display , SetDisplay] = useState(false);

    const resetData = () => {
        SetDisplay(false);
        SetFirstName('')
        SetLastName('')
        SetEmail('')
        SetPassword('')
        SetCPassword('')
    }

    return(
        <View >
            <Text style = {{textAlign:'center' , fontSize:30 , marginTop:100}}>Login Form</Text>
            <View >
            <TextInput style={[styles.InputStyle]}
            placeholder="Enter first name"
            onChangeText={(text) => SetFirstName(text)}
            value={firstName}
            />
            </View>
            <View>
            <TextInput style={[styles.InputStyle]}
            placeholder="Enter last name"
            onChangeText={(text) => SetLastName(text)}
            value={lastName}
            />
            </View>
            <View>
            <TextInput style={styles.InputStyle}
            placeholder="Enter email"
            onChangeText={(text) => SetEmail(text)}
            value={email}
            />
            </View>
            
            <View>
            <TextInput style={styles.InputStyle}
            placeholder="Enter password"
            secureTextEntry={true}
            onChangeText={(text) => SetPassword(text)}
            value={password}
            />
            </View>
            <View>
            <TextInput style={styles.InputStyle}
            placeholder="Enter cpassword"
            secureTextEntry={false}
            onChangeText={(text) => SetCPassword(text)}
            value={cpassword}
            />
            </View>
            <View style={[styles.button]}>
                <View style={[styles.buttonField]}>
                <Button style={{}} title="Submit" onPress={()=>SetDisplay(true)}></Button>
                </View>
                <View style={[styles.buttonField]}>
                <Button style={{}} title="Reset" onPress={()=>{resetData()}}></Button>
                </View>
            </View>

            <View>
                {
                    display?
                    <View style={{margin:50 ,marginTop:10}}>
                        <Text>Your First Name : {firstName}</Text>
                        <Text>Your Last Name : {lastName}</Text>
                        <Text>Your Email Address : {email}</Text>
                        <Text>Your Password : {password}</Text>
                        <Text>Your Cinform Password : {cpassword}</Text>
                    </View>
                    :null
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    name:{
    flexDirection: 'row',
    flexWrap: 'wrap',

    },

    InputStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor:'black',
    borderWidth:2,
    margin:10,
    padding:10,
    borderRadius:20,
    width:'auto',
    },
    button:{
        flexDirection:'row',
        justifyContent: 'space-between',
        margin:10,
        padding:10,
        borderRadius:20,
    },
    buttonField: {
        width:'40%',
    }

})
