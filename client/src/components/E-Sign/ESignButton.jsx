import React from 'react';
import "./ESignButton.css"

const EsignButton = ({documentUrl}) => {

  const handleEsign = async () => {
    console.log("Hi, currently working on it")
    const redirectToOAuth = () => {
      const clientId = '3c48229f1071e3e7b27935efee1f91de'
      const redirectUrl = 'http://localhost:5173/callback'
      const authorizationUrl = `https://satyanshsharma.eversign.com/oauth/authorize?client_id=${clientId}`
      window.location.href = authorizationUrl
    }
    redirectToOAuth()
  //   if(!accessToken){
  //     console.log("svdas")
  //     redirectToOAuth()
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     const signingUrl = await everSignService.initiateEsignature(accessToken, jobId, clientEmail, documentUrl)
  //     window.location.href = signingUrl
  //   }catch (error) {
  //     console.error('Error:', error);
  //   }
  //   setLoading(false);
  // };

}

  return (
    <button onClick={handleEsign} className="esign-button">
      E-signing
    </button>
  );
};

export default EsignButton;
