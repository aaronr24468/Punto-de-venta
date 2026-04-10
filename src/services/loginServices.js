const API_URL = 'http://192.168.1.82:8181';

export const loginUserService = async(data) =>{
    
    const result = await fetch(`${API_URL}/login`,{
        method: 'POST',
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(data)
    })

    return(result.json());
}