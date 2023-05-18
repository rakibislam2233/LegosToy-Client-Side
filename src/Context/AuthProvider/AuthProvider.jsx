import { createContext, useEffect, useState } from "react";
import {
    GithubAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
const auth = getAuth(app);
export const UserContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const Googleprovider = new GoogleAuthProvider();
    const Githubprovider = new GithubAuthProvider();
    const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth)
      .then(() => {})
      .catch(() => {});
  };
  const googleLogin = () => {
   return signInWithPopup(auth,Googleprovider)
  }
  const gitHubLogin = () =>{
    return signInWithPopup(auth,Githubprovider)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
      setUser(loggedUser)
      setLoading(false);
    })
    return () => {
      return unsubscribe();
    }
  },[])
  const authInformation = {
    user,
    createNewUser,
    login,
    logOut,
    loading,
    googleLogin,
    gitHubLogin
  };
  return <UserContext.Provider value={authInformation}>
    {children}
  </UserContext.Provider>;
};

export default AuthProvider;
