import React from "react";
import { View, Text,Image, Button } from "react-native";
import {useDispatch} from 'react-redux'
import { ADD_TO_CART } from "./redux/constants";
import { addToCard } from "./redux/action";

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();

    const handleAddToCart =(item)=>{
        console.warn("called" , item);
        dispatch(addToCard(item));
    }
  return (
    <View style={{marginBottom:10}}>
      <Image style={{ height: 200, width: 412 }} source={{ uri: item.image }} />
      <View style={{paddingLeft:20}}>
      <Text style={{ fontSize: 20 }}>Mobile Name : {item.name}</Text>
      <Text style={{ fontSize: 20 }}>Price : {item.price}</Text>
      <Text style={{ fontSize: 20 }}>Modal Color : {item.color}</Text>
      </View>
      <Button title="Add to cart" onPress={()=>handleAddToCart(item)} />
    </View>
  );
};

export default Product;
