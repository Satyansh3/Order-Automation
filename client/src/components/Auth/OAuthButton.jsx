import React from 'react';

const OAuthButton = () => {
    const handleLogin = () => {
        const clientId = import.meta.env.VITE_CLIENT_ID;
        const redirectUri = 'http://localhost:5173/callback';
        const authorizationUrl = `https://eversign.com/oauth/authorize?client_id=${clientId}`;
        window.location.href = authorizationUrl;
    };

    return (
        <button onClick={handleLogin}>
            Connect to EverSign
        </button>
    );
};

export default OAuthButton;
