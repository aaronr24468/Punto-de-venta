import * as SecureStorage from 'expo-secure-store';
const API_URL = 'http://192.168.1.82:8181';

export const endpoint = async(data, path) =>{
    const response = await fetch(`${API_URL}${path}`,{
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${await SecureStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    }) 
    return(response.json())
}

export const endpointImage = async(formData, id) =>{
    const response = await fetch(`${API_URL}/owner/add/product/image/${id}`,{
        method: 'POST',
        headers:{
            "Authorization": `Bearer ${await SecureStorage.getItem('token')}`,
        },
        body: formData
    })
    return(response.json());
}

export const endpointget = async(path) =>{
    const response = await fetch(`${API_URL}${path}`,{
        method: 'GET',
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${await SecureStorage.getItem('token')}`
        },
    }) 
    return(response.json())
}