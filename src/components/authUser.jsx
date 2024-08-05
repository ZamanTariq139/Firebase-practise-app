import React, { useState } from 'react';
import {auth , googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

function Auth() {
   const [email, setEmail] =  useState("");
   const [password, setPassword] =  useState("");


   const signIn = async ()=>{
    try{
      await createUserWithEmailAndPassword(auth, email, password);
    }
    catch(err){
      console.log("error: "+err)
    }
   }

   const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
    <input type='email' placeholder='Email...' onChange={(e)=> setEmail(e.target.value)} /><br /><br />
    <input type='password' placeholder='Password...' onChange={(e)=> setPassword(e.target.value)}/>

    <br /><br />
    <button onClick={signIn}>Sign In</button><br /> <br />

    <button onClick={signInWithGoogle}> Sign In With Google</button><br /> <br />

    <button onClick={logout}> logout</button>
    </>
  )
}

export default Auth;