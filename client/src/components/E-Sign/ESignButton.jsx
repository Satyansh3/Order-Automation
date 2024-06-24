import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import everSignService from '../../../../api/services/everSignService';
import "./ESignButton.css"

const EsignButton = ({ jobId, clientEmail, documentUrl }) => {
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const authorizationCode = params.get('code')
    if(authorizationCode){
      fetchAccessToken(authorizationCode)
    }
  }, [])

  const fetchAccessToken = async (authorizationCode) => {
    try {
      const token = await everSignService.getAccessToken(authorizationCode)
      setAccessToken(token);
    } catch (error) {
        console.error('Error fetching access token:', error);
    }
};

  const handleEsign = async () => {
    if(!accessToken){
      console.log("svdas")
      redirectToOAuth()
      return;
    }
    setLoading(true);
    try {
      const signingUrl = await everSignService.initiateEsignature(accessToken, jobId, clientEmail, documentUrl)
      window.location.href = signingUrl
    }catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };
  const redirectToOAuth = () => {
    const clientId = '3c48229f1071e3e7b27935efee1f91de'
    const redirectUrl = 'http://localhost:5173/callback'
    const authorizationUrl = `https://satyanshsharma.eversign.com/oauth/authorize?client_id=${clientId}`
    window.location.href = authorizationUrl
  }
  return (
    <button onClick={handleEsign} disabled={loading} className="esign-button">
      {loading ? 'Signing...' : 'E-Sign'}
    </button>
  );
};

export default EsignButton;
