import { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { BackHandler } from "react-native";
import SystemNavigationBar from "react-native-system-navigation-bar";


export const useMain = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [list, setList] = useState([])

    const getProductsList = async() =>{
        
    }

    useEffect(() =>{
        
    }, [])

    return{
        getProductsList
    }
}