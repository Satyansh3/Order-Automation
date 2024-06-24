import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import oAuthService from "../../../../api/services/oAuthService";

const OAuthCallback = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const users = useSelector(state => state.userReducer)
    console.log("Username", users.username)

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get('code')
        if(code){
            oAuthService.exchangeCodeForToken(code)
            localStorage.setItem('eversign_token', code);
            navigate(`../admin/jobs/${users.username}`)
        }
        else{
            console.log
            console.log("Token not found")
        }
    }, [location, navigate])

    return(
        <div>Loading...</div>
    )
}

export default OAuthCallback