import { useState, useEffect, useRef } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { BackHandler } from "react-native";
import SystemNavigationBar from "react-native-system-navigation-bar";


export const useMain = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [list, setList] = useState([]);
    const [searchI, SetSearchI] = useState(false)

    const inputSearch = useRef();

    const getProductsList = async() =>{
        
    }

    useEffect(() =>{
        
    }, [])

    return{
        getProductsList,
        SetSearchI,
        searchI
    }
}