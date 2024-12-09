import React, { useEffect, useState } from 'react';
import { createContext } from "react";

import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import app from "../Firebase/Firebase";

export const AuthContext = createContext();
const auth = getAuth(app);




const Context = ({ children }) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)


    const CreateUser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const Login=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateuser=(userinfo)=>{
        setloading(true)
        return updateProfile(auth.currentUser,userinfo);


    }

    const Logout=()=>{
        setloading(true)
        return signOut(auth);
    }

    useEffect(()=>{

        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser);
            setloading(false)
        })

        return ()=> unsubscribe();

    },[])
    
    const Authinfo = {CreateUser,Login,user,Logout,updateuser,loading}
    return (
        <div>
            <AuthContext.Provider value={Authinfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default Context;