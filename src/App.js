
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Passwprd from './components/Password/Passwprd';
const auth = getAuth(app);

function App() {

  const [user,setUser]=useState({})
  const provider = new GoogleAuthProvider();
  const handleSingIn=()=>{
    signInWithPopup(auth,provider)
    .then((result) => {
 
      const user = result.user;
      setUser(user)
      console.log(user);
    })
      .catch((error) => {
        console.log(error);
      
      });

    
  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser({})
    }).catch((error) => {
      // An error happened.
      setUser({})
    });
  }
  return (
    <div >
      {
        user.email ?<button onClick={handleSignOut}>google sigm out</button>:
        <button onClick={handleSingIn}>google sigm in</button>
      
      }


      <p> Name ; {user.displayName}</p>
      <Passwprd></Passwprd>
    </div>
  );
}

export default App;
