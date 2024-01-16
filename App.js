import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View , FlatList, SafeAreaView } from 'react-native';
import Form  from './src/component/Form';
import FlatListDemo from './src/component/FlatListDemo';
import CustomGridDemo from './src/component/CustomGridDemo';
import SectionListDemo from './src/component/SectionListDemo';
import UseEffectDemo from './src/component/UseEffectDemo';
import ShowHideComp from './src/component/ShowHideComp';
import ResponsiveLayout from './src/component/ResponciveLaryout';
import ButtonStyling from './src/component/ButtonStyling';
import RadioButtonDemo from './src/component/RadioButtonDemo';
import LoaderDemo from './src/component/LoaderDemo';
import ModalDemo from './src/component/ModelDemo';
import PressableDemo from './src/component/PressableDemo';
import StatusBarDemo from './src/component/StatusBarDemo';
import PlateformDemo from './src/component/PlateformDemo';
import NpmInstallDemo from './src/component/NpmInstallDemo';

// Navigation Folder 
import NavigationDemo from './src/navigation/NavigationDemo';
import TabNavigationDemo from './src/navigation/TabNavigationDemo';
import GetApi from './src/api/GetApi';

// Api Folder 

export default function App() {
  return (
    // <View style={{flex:1}}>

    
      // <Form />

    //  <FlatListDemo />

    //  <CustomGridDemo /> */}

    // {/* <SectionListDemo /> */}

    // {/* <UseEffectDemo /> */}

    // {/* <ShowHideComp /> */}

    // <ResponsiveLayout />

    // <ButtonStyling />

    // <RadioButtonDemo />

    // <LoaderDemo />

    // <ModalDemo />

    // <PressableDemo />

    // <StatusBarDemo />

    // <PlateformDemo />

    // <NpmInstallDemo />

    // Navigation Method 
    // <NavigationDemo />

    // <TabNavigationDemo />

    // Api format 
    <GetApi />

    // </View>

    // <SafeAreaView>
    // <View  style={styles.container}>
    //   <StatusBar style="auto" />
    //   <View>
    //   <Text style={styles.textSize}>Welcome to New App</Text>
    //   </View>
    //   <View>
    //   <FlatList
    //     data={DATA}
    //     renderItem={({item}) => <Item title={item.title} />}
    //     keyExtractor={item => item.id}
    //   />
    //   </View>
      
    //   <View style={styles.fixToText}>
    //   <Button title="Start" color={'black'} onPress={() => Alert.alert("Button Pressed")} ></Button>
    //   </View>
    // </View>
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop:100,
//     textAlign:'cenetr',
//     justifyContent:'center',
//     alignItems:'center',

//   },
//   textSize: {
//     fontSize: 30,
//   },
//   fixToText:{
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding:20,
//     borderRadius:50,
//   }

// });

