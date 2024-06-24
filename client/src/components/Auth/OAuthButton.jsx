import React from 'react';

const OAuthButton = () => {
    const handleLogin = () => {
        const clientId = '3c48229f1071e3e7b27935efee1f91de';
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
