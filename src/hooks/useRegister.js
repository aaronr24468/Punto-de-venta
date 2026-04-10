import { useState } from "react";
import { registerUser } from "../services/registerServices";

export const useRegisterUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const getInfoRegister = async () => {
        try {
            setLoading(true)
            const info = {
                name,
                lastname,
                username,
                password,
                password2
            }

            const result = await registerUser(info)

            console.log(result.message)


        } catch (error) {

        }finally{
            setLoading(false)
        }


        console.log(info)
    }

    return {
        getInfoRegister,
        setName,
        setLastname,
        setUsername,
        setPassword,
        setPassword2
    }

}