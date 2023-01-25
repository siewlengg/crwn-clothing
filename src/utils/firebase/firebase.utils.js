import {initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0BDm3N1_pOuqyULIJ7CYZk_AJeitKDgU",
    authDomain: "tutorial-bc0e6.firebaseapp.com",
    projectId: "tutorial-bc0e6",
    storageBucket: "tutorial-bc0e6.appspot.com",
    messagingSenderId: "414365982460",
    appId: "1:414365982460:web:3e496b74c2b737d41e0179"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth(); 
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log (userSnapshot.exists());
    
    if (!userSnapshot.exists()){
      const {displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt
        });
      } catch (error){
        console.log('error creating the user', error.message)
      }
    }
    
    return userDocRef;
  };

