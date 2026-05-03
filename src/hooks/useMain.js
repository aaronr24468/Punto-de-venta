import { useState, useEffect, useRef } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { BackHandler, StatusBar, AppState } from "react-native";
import SystemNavigationBar from "react-native-system-navigation-bar";
import * as SecureStorage from 'expo-secure-store'
import { useNavigation } from "@react-navigation/native";


export const useMain = () =>{
    const navigate = useNavigation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [list, setList] = useState([]);
    const [searchI, SetSearchI] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const inputSearch = useRef();

    const getProductsList = async() =>{
       
    }

    const logOut = async() =>{
        await SecureStorage.deleteItemAsync('token');
        navigate.navigate('Login');
    }

    useEffect(() =>{
        //mandar a llamar getProductList 
        getProductsList(); 

        const statusApp = (nextState) => {
            if (nextState === 'active') {
                StatusBar.setHidden(true, 'none')
            }
        }

        const subscription = AppState.addEventListener('change', statusApp)

        StatusBar.setHidden(true)
    }, [])

    return{
        getProductsList,
        SetSearchI,
        searchI,
        setShowModal,
        showModal,
        logOut
    }
}