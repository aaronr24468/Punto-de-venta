import { useState, useEffect, useCallback } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Alert, StatusBar, AppState } from "react-native";

export const useAddProduct = () =>{
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState("0");

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
            StatusBar.setHidden(true)
        }
    }

    useEffect(() =>{
        const statusApp = (nextState) =>{
            if(nextState === 'active'){
                StatusBar.setHidden(true, 'none')
            }
        }

        const subscription = AppState.addEventListener('change', statusApp)

        StatusBar.setHidden(true)
    })

    

    return{
        getImageData,
        image,
        setCategory,
        category,
        setQuantity,
        quantity
    }
}