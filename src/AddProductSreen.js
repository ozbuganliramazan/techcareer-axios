import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import axios from "axios";

const AddProductSreen = () => {
  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantityPerUnit, setQuantityPerUnit] = useState("");
  const [unitslnStock, setUnitslnStock] = useState("");

  const add = () => {
    let newProduct = {
      name: name,
      unitPrice: unitPrice,
      quantityPerUnit: quantityPerUnit,
      unitslnStock: unitslnStock,
    };

    axios
      .post("https://northwind.vercel.app/api/suppliers", newProduct)
      .then((res) => {
        Alert.alert("Başarılı", "Tedarikçi başarıyla eklendi.");
      });
  };

  return (
    <>
      <View>
        <Text> name</Text>
        <TextInput onChangeText={setName} />
      </View>
      <View>
        <Text>unitPrice</Text>
        <TextInput onChangeText={setUnitPrice} />
      </View>
      <View>
        <Text>quantityPerUnit</Text>
        <TextInput onChangeText={setQuantityPerUnit} />
      </View>
      <View>
        <Text> unitslnStock</Text>
        <TextInput onChangeText={setUnitslnStock} />
      </View>
      <View>
        <Button onPress={add}>Add</Button>
      </View>
    </>
  );
};

export default AddProductSreen;
