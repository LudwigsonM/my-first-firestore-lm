import admin from "firebase-admin"; // imports firebase library of tools 
import serviceAccount from './credentials.js'; // imports our credentials to connect to firebase 

admin.initializeApp({            // this connects to our firebase project
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials 
});

const db = admin.firestore(); // creates a shortcut to access the firestore database
export const restaurantsCol = db.collection('restaurants'); // shortcut to point to our collection