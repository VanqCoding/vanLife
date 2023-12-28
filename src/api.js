import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    documentId
} from "firebase/firestore/lite"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5s-WOfCTVsU66seJIdB4YBVGIZ99QLc0",
    authDomain: "vanlife-7e97f.firebaseapp.com",
    projectId: "vanlife-7e97f",
    storageBucket: "vanlife-7e97f.appspot.com",
    messagingSenderId: "631759257834",
    appId: "1:631759257834:web:3e2bceb03ca957f0cdd793"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// Refactoring the fetching functions below
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    try {
        const { email, password } = creds;

        // Use Firebase Authentication to sign in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // User is authenticated, you can return user data or a token as needed
        const user = userCredential.user;

        // Return user data or token, depending on your requirements
        return {
            user: {
                uid: user.uid, // User's unique ID
                email: user.email, // User's email
                // Add other user data here if needed
            },
            token: "YourTokenHere", // You can generate and return a token here
        };
    } catch (error) {
        // Handle authentication errors
        if (error.code === "auth/invalid-credential") {
            // Handle case where no user with the provided email is registered
            throw new Error("Wrong email or password!");
        } else {
            // Handle other authentication errors
            throw error;
        }
    }
}