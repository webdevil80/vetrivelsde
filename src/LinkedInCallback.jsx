import React from 'react';
import { useLocation } from 'react-router-dom';

export default function LinkedInCallback() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');
  const error = params.get('error');

  React.useEffect(() => {
    if (code) {
      console.log('LinkedIn authorization code:', code);
    }
    if (error) {
      console.error('LinkedIn OAuth error:', error);
    }
  }, [code, error]);

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">LinkedIn OAuth Callback</h2>
      {code && (
        <div>
          <p className="mb-2">Authorization code received:</p>
          <code className="block bg-gray-100 text-gray-800 p-2 rounded mb-4 break-all">{code}</code>
          <p className="text-sm text-gray-500">Copy this code and use it to exchange for an access token.</p>
        </div>
      )}
      {error && (
        <div className="text-red-600 font-semibold">
          Error: {error}
        </div>
      )}
      {!code && !error && <p>Waiting for LinkedIn response...</p>}
    </div>
  );
}
