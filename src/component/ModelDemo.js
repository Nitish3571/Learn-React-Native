// import React, { useState } from 'react';
// import { Text, View , StyleSheet , Button, Modal} from 'react-native';

// export default function LoaderDemo (){
//     const [showModal , setShowModal] = useState(false);

//     return(
//         <View style={[styles.main]}>  
//         <Modal transparent={true} visible={showModal} animationType="slide">
//             <View style={styles.centeredView}>
//                 <View style={styles.modalView}>
//                     <Text style={styles.modalText}>Hello Modal </Text>
//                     <Button title='close Modal' onPress={()=>setShowModal(false)} />
//                 </View>
//             </View>
//         </Modal>
//             <View style={styles.buttonView}>
//                 <Button title='Open Modal' onPress={()=>setShowModal(   )}/>
//             </View>       
//         </View>
//     )

// };

// const styles = StyleSheet.create({
//     main:{
//         flex:1,
//     },
//     buttonView:{
//         flex:1,
//         justifyContent:'flex-end'
//     },
//     centeredView:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     modalView:{
//         backgroundColor:'skyblue',
//         padding:40,
//         borderRadius:20,
//         shadowColor:'black',
//         elevation:5,
//     },
//     modalText:{
//         fontSize:30,
//         marginBottom:20,
//     }
    
// })


// Custom Modal box 

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View , StyleSheet , Button, Modal} from 'react-native';

export default function LoaderDemo (){
    const [showModal , setShowModal] = useState(false);

    return(
        <View style={[styles.main]}>  
        <StatusBar />
            {
                showModal ? 
                <View style={styles.modal}>
                <View style={styles.body}>
                    <Text>Some Text </Text>
                    <Button title='Close'  onPress={()=>setShowModal(false)}/>
                </View>
            </View>
            : null
            } 
            <Button title='Open Dialog' onPress={()=>setShowModal(true)}/>    
        </View>
    )

};

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"flex-end"
    },
    modal:{
        flex:1,
        backgroundColor:"rgba(50,50,50,0.5)",
        justifyContent:'center',
        alignItems:'center',
    },
    body:{
        backgroundColor:'#fff',
        height:300,
        width:300,
        padding:20,
        justifyContent:'flex-end',
        borderRadius:10,
    }
})


