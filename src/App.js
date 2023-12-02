import './App.css';
import Login from './components/LoginButton';
import { GoogleOAuthProvider, GoogleLogin ,useGoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import { Button, ButtonGroup } from '@chakra-ui/react'


function App() {

  const [login, setLogin] = useState(false);
  const [file, setFile] = useState(null);
  const client_id = "46012088616-ljh6qikl0oshu1kfk2mak4r1r5fqp0if.apps.googleusercontent.com";



  const handleFileUpload = (e) => {
    if (!login) {
      alert("You need to login to upload file");
      return;
    }

    const uploadFile = e.target.files[0];
    setFile(uploadFile);
  }

  return (
    <div className="App">

      <div className='App-header'>
        <GoogleOAuthProvider clientId="46012088616-ljh6qikl0oshu1kfk2mak4r1r5fqp0if.apps.googleusercontent.com">
          <GoogleLogin auto_select
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
        
        {login ? (<div className='App-header'>
          <label htmlFor="avatar">Choose a file:</label>
        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
        </div>) : <div className='App-header'>You need to login to upload file</div>}
       
        

      </div>

    </div>
  );
}

export default App;
