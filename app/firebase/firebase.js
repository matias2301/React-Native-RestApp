import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import firebaseConfig from './firebaseConfig';

class Firebase {
    constructor() {
        if( !app.apps.length ){
            app.initializeApp(firebaseConfig)
        }        
        this.auth       = app.auth();
        this.db         = app.firestore();
        this.storage    = app.storage();
    }

    // Register a new user
    async signup(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);

        return await newUser.user.updateProfile({
            displayName : name
        })
    }
    
    // Login user
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // Logout user
    async logout() {
        await this.auth.signOut();
    }
}

const firebase = new Firebase();
export default firebase;