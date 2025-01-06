import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const LoginPage = () => {
  useEffect(() => {
    netlifyIdentity.init(); // Initialize the Netlify Identity widget
  }, []);

  const handleLogin = () => {
    netlifyIdentity.open();  // Opens the Netlify login modal
  };

  return (
    <div>
      <h2>Login to Edit Your Content</h2>
      <button onClick={handleLogin}>Login with Netlify Identity</button>
    </div>
  );
};

export default LoginPage;
