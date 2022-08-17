import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();
    let navigate = useNavigate();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })
        const json = await response.json()
        const user = JSON.parse(JSON.stringify(json));

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        } else {
            localStorage.setItem('user',JSON.stringify(json));
            localStorage.setItem('id', user.id)
            dispatch({type: 'LOGIN', payload: json});
            setIsLoading(false);
            navigate('/create');
        }
    }
    return {signup, isLoading, error}
} 