// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';

// export default function GetApi () {
//     const [data , setData] = useState(undefined);

//     const getApiData =async ()=>{
//         const url = "https://jsonplaceholder.typicode.com/posts/1";
//         let result = await fetch(url);
//         result = await result.json();
//         setData(result);
//     }
//     useEffect(()=>{
//         getApiData();
//     },[])
//     return(
//         <View style={{marginTop:20 , alignItems:'center'}}>
//             <Text style={{fontSize:30}}>Api Call </Text>
//             {
//                 data ? <View>
//                     <Text style={{fontSize:20}}>{data.id} </Text>
//                     <Text style={{fontSize:20}}>{data.userId} </Text>
//                     <Text style={{fontSize:20}}>{data.title} </Text>
//                     <Text style={{fontSize:20}}>{data.body} </Text>
//                     </View>
//                 :null
//             }
//         </View>
//     )
// }

// large amount of data list using api

// import React, { useEffect, useState } from "react";
// import { ScrollView, Text, View } from "react-native";

// export default function GetApi() {
//   const [data, setData] = useState([]);

//   const getApiData = async () => {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//   };
//   useEffect(() => {
//     getApiData();
//   });
//   return (
//     <ScrollView>
//     <View>
//       <View style={{ marginTop: 30, alignItems: "center" }}>
//         <Text style={{ fontSize: 30 }}>List of Api Data</Text>
//       </View>
//       {
//         data.length ?
//         data.map((item)=><View style={{margin:10 , borderBottomWidth:1 , borderBottomColor:'#ccc' , padding:5}}>
//             <Text style={{backgroundColor:'#ddd'}}>Id : {item.id}</Text>
//             <Text>Title : {item.title}</Text>
//             <Text>Body : {item.body}</Text>
//         </View>)
//         :null
//       }
//     </View>
//     </ScrollView>
//   );
// }


// list create using flatlist with api 

// import React, { useEffect, useState } from "react";
// import { FlatList, ScrollView, Text, View } from "react-native";

// export default function GetApi() {
//   const [data, setData] = useState([]);

//   const getApiData = async () => {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//   };
//   useEffect(() => {
//     getApiData();
//   });
//   return (
//     <View>
//       <View style={{ marginTop: 30, alignItems: "center" }}>
//         <Text style={{ fontSize: 30 }}>FlatList With Api Data</Text>
//       </View>
//       {
//         data.length ?
//         <FlatList
//             data={data}
//             renderItem={({item}) => <View style={{borderBottomColor:'orange' , borderBottomWidth:1 , padding:10}}>
//                 <Text style={{fontSize:30 , backgroundColor:'orange'}}>{item.id}</Text>
//                 <Text style={{fontSize:16}}>{item.title}</Text>
//                 <Text style={{fontSize:16}}>{item.body}</Text>
//             </View>}
//         />
//         :null
//       }
//     </View>
//   );
// }


// custom api to list data from json 

// import React, { useEffect, useState } from "react";
// import { FlatList, ScrollView, Text, View } from "react-native";

// export default function GetApi() {
//   const [data, setData] = useState([]);

//   const getApiData = async () => {
//     const url = "http://192.168.1.7:3000/users";
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//   };
//   useEffect(() => {
//     getApiData();
//   });
//   return (
//     <View>
//       <View style={{ marginTop: 30, alignItems: "center" }}>
//         <Text style={{ fontSize: 30 }}>FlatList With Api Data</Text>
//       </View>
//       {
//         data.length ?
//         <FlatList
//             data={data}
//             renderItem={({item}) => <View style={{borderBottomColor:'orange' , borderBottomWidth:1 , padding:10}}>
//                 <Text style={{fontSize:30 , backgroundColor:'orange'}}>{item.id}</Text>
//                 <Text style={{fontSize:16}}>{item.name}</Text>
//                 <Text style={{fontSize:16}}>{item.age}</Text>
//                 <Text style={{fontSize:16}}>{item.email}</Text>
//             </View>}
//         />
//         :null
//       }
//     </View>
//   );
// }



// add data using post method 

import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function GetApi() {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const data = {
      name:"Bittu Kumar",
      age:19,
      email:"bittu@gmail.com"
    }
    const url = "http://192.168.1.7:3000/users";
    let result = await fetch(url , {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    });

    result = await result.json();
    console.warn((result));
    // setData(result);
  };
  useEffect(() => {
    getApiData();
  });
  return (
    <View>
      <View style={{ marginTop: 30, alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>FlatList With Api Data</Text>
      </View>
      {
        data.length ?
        <FlatList
            data={data}
            renderItem={({item}) => <View style={{borderBottomColor:'orange' , borderBottomWidth:1 , padding:10}}>
                <Text style={{fontSize:30 , backgroundColor:'orange'}}>{item.id}</Text>
                <Text style={{fontSize:16}}>{item.name}</Text>
                <Text style={{fontSize:16}}>{item.age}</Text>
                <Text style={{fontSize:16}}>{item.email}</Text>
            </View>}
        />
        :null
      }
    </View>
  );
}

