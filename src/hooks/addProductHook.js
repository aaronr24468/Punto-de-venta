import { useState, useEffect, useCallback } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Alert, StatusBar, AppState } from "react-native";
import { endpoint, endpointImage } from "../services/ownerServices";

export const useAddProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [image, setImage] = useState(null);

    const [photo, setPhoto] = useState(null)
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [category, setCategory] = useState('Frutas');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState("0");

    const getImageData = async () => {

        try {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (!permissionResult.granted) {
                Alert.alert('Permiso requerido', 'Permiso para acceder a la galeria es requerido')
                return;
            }

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'],
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1
            })

            //console.log(result.assets)

            if (!result.canceled) {
                setPhoto(result.assets[0])
                setImage(result.assets[0].uri)
                StatusBar.setHidden(true)
            }

        } catch (error) {
            setError(error.message || "Error de servidor")
        }


    }

    const getProductInfo = async () => {
        try {
            const path = '/owner/add/product'
            const data = {
                name,
                code,
                category,
                price,
                quantity
            }
            console.log(data)
            const response = await endpoint(data, path);

            const id = response.id

            if (photo != null && response.ok) {
                setTimeout(async() => {
                    const formData = new FormData();
                    formData.append('image', { uri: photo.uri, name: photo.fileName, type: photo.mimeType });
                    const info = await endpointImage(formData, id)
                    alert(response.message)
                }, 200)
            }
            
        } catch (error) {

        }
    }

    useEffect(() => {
        const statusApp = (nextState) => {
            if (nextState === 'active') {
                StatusBar.setHidden(true, 'none')
            }
        }

        const subscription = AppState.addEventListener('change', statusApp)

        StatusBar.setHidden(true)

        subscription.remove();
    })



    return {
        getImageData,
        image,
        setName,
        setCode,
        setPrice,
        setCategory,
        category,
        setQuantity,
        quantity,
        getProductInfo
    }
}