import React, {createContext, useEffect, useState} from "react";
import _firebase from "firebase";

let App = undefined;

export const FirebaseContext = createContext<Partial<_firebase.app.App>>({})

export const FirebaseProvider = (props: { children: React.ReactNode; }) => {
    const [firebase, setFirebase] = useState<Partial<_firebase.app.App>>({})

    useEffect(() => {
        const app = _firebase.initializeApp({
            apiKey: "AIzaSyD9ayY3vmfMqy3T2dK7KdMBNnQpJK8mPN8",
            authDomain: "adhero-vk.firebaseapp.com",
            databaseURL: "https://adhero-vk.firebaseio.com",
            projectId: "adhero-vk",
            storageBucket: "adhero-vk.appspot.com",
            messagingSenderId: "187100490145",
            appId: "1:187100490145:web:c27f584c667e11177a03e0",
            measurementId: "G-21LZH2FZ9Y"
        })
        _firebase.functions().useFunctionsEmulator('http://localhost:5001')
        App = app
        setFirebase(app)
    }, [])


    return (
        <FirebaseContext.Provider value={firebase}>
            {firebase && props.children}
        </FirebaseContext.Provider>
    )
};

export const app = App

