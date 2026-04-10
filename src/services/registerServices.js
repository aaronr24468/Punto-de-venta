const API_URL = 'http://192.168.1.82:8181';

export const registerUser = async(info) =>{
    const response = await fetch(`${API_URL}/register`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(info)
    })
}