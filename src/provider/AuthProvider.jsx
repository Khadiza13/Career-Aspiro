/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
export const auth = getAuth(app);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //console.log(user);
  const createUser = (email, pass, name, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        const currentUser = auth.currentUser;

        return updateProfile(currentUser, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          //console.log("Profile updated successfully!");
          setUser({
            ...currentUser,
            displayName: name,
            photoURL: photoURL,
          });
        });
      })
      .catch((error) => {
        // console.error("Error creating user or updating profile:", error);
        throw error;
      });
  };

  const logout = () => {
    return signOut(auth);
  };
  const loginUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        //console.log("Google login successful:", user);
      })
      .catch((error) => {
        //console.error("Google login failed:", error);
        throw error;
      });
  };

  const authinfo = {
    user,
    setUser,
    createUser,
    logout,
    loginUser,
    loginWithGoogle,
    loading,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};
