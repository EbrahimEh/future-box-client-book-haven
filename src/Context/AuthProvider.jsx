import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe()
        }
    }, [])

    const authInfo = {
        googleSignIn,
        user,
        signOutUser

    }

    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;