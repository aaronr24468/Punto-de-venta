import { useState, useEffect, useRef } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { BackHandler, StatusBar, AppState } from "react-native";
import SystemNavigationBar from "react-native-system-navigation-bar";


export const useMain = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [list, setList] = useState([]);
    const [searchI, SetSearchI] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const inputSearch = useRef();

    const getProductsList = async() =>{
        
    }

    useEffect(() =>{
        //mandar a llamar getProductList 

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
        showModal
    }
}