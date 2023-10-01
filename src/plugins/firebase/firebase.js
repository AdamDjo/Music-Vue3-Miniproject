import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyCZydwwglV1Mpw42h9yVOOAI-ozEZUniGU',
  authDomain: 'music-32553.firebaseapp.com',
  projectId: 'music-32553',
  storageBucket: 'music-32553.appspot.com',
  appId: '1:593162951225:web:e4b863cbb913a9bc300be8'
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')

export { auth, db, usersCollection, storage }
