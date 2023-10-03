import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js'


function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <button onClick={signInWithGoogle}> Sign In With Google <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
            </button>
        </div>
    )
}

export default SignIn

