import React from "react";
import { View , Text,Image, ScrollView } from "react-native";
import Header from "./Header";
import Product from "./Product";
const Main = ()=>{

    const products=[
        {
            name:'Samsung Mobile',
            price:35000,
            color:'Green',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6D8RZ0D5TQ05LCgRF2Ch275vsuYLuS2-Jj-j00-MyQ82PrrHpHn7QcQ_1xy8lPa-QbBE&usqp=CAU',
        },
        {
            name:'Oppo Mobile',
            price:25000,
            color:'Black',
            image:'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-630,c-at_max,q-80',
        },
        {
            name:'Apple Mobile',
            price:150000,
            color:'White',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrN8qve4hpn0mCQpEFkgq5MsiXu8WQMKlPMHBI6CF_tn0Kv-YRgtNrgvXUKtI6EJUrAs&usqp=CAU',
        },

    ]
    return(
        <View style={{flex:1 , marginTop:50}}>
            <Header />
            <ScrollView>
            {
                products.map((item)=><Product item={item} />)
            }
            </ScrollView>
            
        </View>
    )
}

export default Main;