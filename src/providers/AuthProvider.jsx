import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            const userEmail = currentUser?.email || user?.email;
            const loggedInUser = { email: userEmail };
            if (currentUser) {
                axios.post("http://localhost:5500/jwt", loggedInUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            } else {
                axios.post("http://localhost:5500/logout", loggedInUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });
        return () => {
            return unsubscribe()
        };
    }, [user?.email]);

    const authInfo = {
        user,
        signUpUser,
        loginUser,
        logoutUser,
        googleSignIn,
        loading,
        updateUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
