import { useState, useEffect } from "react";

export const useInventory = () =>{
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('')

    return{
        category,
        setCategory,
        stock,
        setStock
    }
}