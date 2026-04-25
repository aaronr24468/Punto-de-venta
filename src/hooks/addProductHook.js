import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Alert } from "react-native";

export const useAddProduct = () =>{
    const [image, setImage] = useState(null);

    const getImageData = async() =>{

        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(!permissionResult.granted){
            Alert.alert('Permiso requerido', 'Permiso para acceder a la galeria es requerido')
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4,4],
            quality: 1
        })

        console.log(result)

        if(!result.canceled){
            setImage(result.assets[0].uri)
        }
    }

    return{
        getImageData,
        image
    }
}