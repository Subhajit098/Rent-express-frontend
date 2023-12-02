import React from 'react'
import { GoogleOAuthProvider, GoogleLogin ,useGoogleLogin ,googleLogout} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useState } from 'react';


export default function Login() {

  const [login, setLogin] = useState(false);
  const [file, setFile] = useState(null);

  return (
      <>
        <GoogleOAuthProvider clientId="46012088616-ljh6qikl0oshu1kfk2mak4r1r5fqp0if.apps.googleusercontent.com">
          <GoogleLogin auto_select={true}
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse.credential)
              setLogin(true);
              console.log(decoded);
              alert("Logged in successfully")
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
      </>
  )
}
