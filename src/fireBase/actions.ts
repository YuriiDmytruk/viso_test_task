import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, remove } from 'firebase/database'

import { MarkerType } from "../../types";

const firebaseConfig = {
    apiKey: "AIzaSyCw8WJBWLsS1I0QRMfHkZ5yQbqI1pRohWE",
    authDomain: "visotesttask-9340e.firebaseapp.com",
    projectId: "visotesttask-9340e",
    storageBucket: "visotesttask-9340e.appspot.com",
    messagingSenderId: "48501444607",
    appId: "1:48501444607:web:d63e1df7ad45e5a19221ca",
    measurementId: "G-3ENMK9VRX6",
    databaseURL: "https://visotesttask-9340e-default-rtdb.firebaseio.com/",
};

initializeApp(firebaseConfig);
const db = getDatabase();


export const updateMarkerDB = async (marker: MarkerType) => {
    try {
        await set(ref(db, `markers/${marker.id}`), {
            name: marker.name,
            location: marker.position,
            timestamp: Date.now()
        })
    }
    catch(error){
        console.log(`Error updating marker in Firebase: ${error}`)
    }
}

export const deleteMarkerDB = async (id: number) => {
    try {
        await remove(ref(db, `markers/${id}`))
    }
    catch(error){
        console.log(`Error deleting marker in Firebase: ${error}`)
    }
};

export const deleteAllMarkersDB = async () => {
    try {
        await remove(ref(db, `markers/`))
    }
    catch(error){
        console.log(`Error deleting all marker in Firebase: ${error}`)
    }
}
