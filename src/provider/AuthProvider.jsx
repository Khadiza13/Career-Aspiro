/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const createUser = (email, pass, name, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        const currentUser = auth.currentUser;

        // Update the profile of the authenticated user
        return updateProfile(currentUser, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          console.log("Profile updated successfully!");
          // Optional: Force-refresh user state to ensure updates are applied
          setUser({
            ...currentUser,
            displayName: name,
            photoURL: photoURL,
          });
        });
      })
      .catch((error) => {
        console.error("Error creating user or updating profile:", error);
        throw error;
      });
  };

  const logout = () => {
    return signOut(auth);
  };
  const loginUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const authinfo = {
    user,
    setUser,
    createUser,
    logout,
    loginUser,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

// export default AuthProvider;
