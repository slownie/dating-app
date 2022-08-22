import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();
    let navigate = useNavigate();

    const signup = async (email, password, formData) => {
        setIsLoading(true);
        setError(null);

        console.log("Hook: "+JSON.stringify(formData));

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password,formData})
        })
        const json = await response.json()
        const user = JSON.parse(JSON.stringify(json));
        console.log(user);

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        } else {
            sessionStorage.setItem('user',JSON.stringify(json));
            dispatch({type: 'LOGIN', payload: json});
            setIsLoading(false);
            navigate('/search');
        }
    }
    return {signup, isLoading, error}
} 