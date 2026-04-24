import { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { loginUserService } from "../services/loginServices";
import * as ScreenOrientation from 'expo-screen-orientation';
import { BackHandler } from "react-native";

export const useLogin = () => {
    const navigate = useNavigation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {
        try {

            setLoading(true);



            // const data = {
            //     username: username,
            //     password: password
            // }

            // const response = await loginUserService(data);

            // const key = response.token;

            // !response.ok ? (alert(response.message)) : (navigate.navigate('Main'));

            navigate.navigate('Main')


        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    BackHandler.addEventListener('hardwareBackPress', () => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    })

    return {
        loginUser,
        setUsername,
        setPassword
    }
}