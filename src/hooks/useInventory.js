import { useState, useEffect } from "react";
import { AppState, StatusBar } from "react-native";
import { endpointget } from "../services/ownerServices";

export const useInventory = () => {
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [inventory, setInventory] = useState([]);
    const [product, setProduct] = useState({});

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [categoryP, setCategoryP] = useState('');
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState(0);

    const getInventory = async() =>{
        try {
            setLoading(true);
            const path = '/owner/get/inventory';
            const inventoryData = await endpointget(path);
            setInventory(inventoryData.data)
        } catch (error) {
            setError(error.message || 'Error de servidor')
        }finally{
            setLoading(false)
        }
    }

    const getProductById = async(id) =>{
        try {
            setLoading(true);
            const path = `/owner/get/product/info/${id}`;
            const product = await endpointget(path);

            if(!product.ok) return setError(product.message);
            console.log(product)
            setImage(product.item.image);
            setName(product.item.name);
            setCategoryP(product.item.category);
            setPrice(product.item.price);
            setQuantity(product.item.quantity)

        } catch (error) {
            setError(error.message || 'Error de servidor')
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getInventory();
        
        const statusApp = (nextState) => {
            if (nextState === 'active') {
                StatusBar.setHidden(true, 'none')
            }
        }

        const subscription = AppState.addEventListener('change', statusApp)

        StatusBar.setHidden(true)
    }, [])

    return {
        category,
        setCategory,
        stock,
        setStock,
        inventory,
        edit,
        setEdit,
        getProductById,
        setImage,
        image,
        setName,
        name,
        setCategoryP,
        categoryP,
        setPrice,
        price,
        setQuantity,
        quantity
    }
}