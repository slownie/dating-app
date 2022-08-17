import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useUpdate = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    let navigate = useNavigate();

    const update = async(formData, userID) => {
        setIsLoading(true);
        setError(null);
        //console.log("FormData (useUpdate): "+JSON.stringify(formData))
        
        const response = await fetch('/api/users/update/'+userID, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        const json = await response.json();

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        } else {
            setIsLoading(false);
            navigate('/search');
        }
    }
    return {update, isLoading, error}
}