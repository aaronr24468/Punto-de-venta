import { useState, useEffect } from "react";
import { AppState, StatusBar } from "react-native";

export const useInventory = () => {
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('')

    useEffect(() => {
        const statusApp = (nextState) => {
            if (nextState === 'active') {
                StatusBar.setHidden(true, 'none')
            }
        }

        const subscription = AppState.addEventListener('change', statusApp)

        StatusBar.setHidden(true)
    })

    return {
        category,
        setCategory,
        stock,
        setStock
    }
}