import { useState, useEffect } from 'react'
import firebase from '../firebase/firebase';

function useAuth() {

    const [userLogged, setUserLogged] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if( user ) {
                setUserLogged(user);
            } else {
                setUserLogged(null);
            }
            setLoaded(true)
        });
        return () => unsuscribe();
    }, []);
    
    return {
        userLogged,
        loaded
    }
}

export default useAuth;