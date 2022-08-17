import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const [_error, _setError] = useState(null);
    const [_isLoading, _setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();
    let navigate = useNavigate();

    const login = async (email, password) => {
        _setIsLoading(true);
        _setError(null);

        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
        })
        const json = await response.json();

        if(!response.ok) {
            _setIsLoading(false);
            _setError(json.error);
        } else {
            localStorage.setItem('user',JSON.stringify(json));
            dispatch({type: 'LOGIN', payload: json});
            _setIsLoading(false);
            navigate('/search');
        }
    }
    return {login, _isLoading, _error}
}