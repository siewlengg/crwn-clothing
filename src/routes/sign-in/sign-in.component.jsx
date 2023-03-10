// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
    // auth, 
    signInWithGooglePopup, 
    // signInWithGoogleRedirect,
    } 
    from '../../utils/firebase/firebase.utils';

import {createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../component/sign-up-form/sign-up-form.component';

const SignIn = () => {
    // Method for Google Redirect in Firebase
    // useEffect(() => {
    //     const loadData = async () => {
    //         const response = await getRedirectResult(auth);
            
    //         if (response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user)
    //         };
    //     }

    //     loadData();
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick ={logGoogleUser} >
                Sign In with Google Pop Up
            </button>
            <SignUpForm/>
            {/* <button onClick = {signInWithGoogleRedirect} >
                Sign In with Google Redirect
            </button> */}
        </div>
    )
}

export default SignIn;
