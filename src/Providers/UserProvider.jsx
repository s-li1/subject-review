import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../Config/Firebase/firebase';
export const UserContext = createContext ({ user: null });


export default function UserProvider(props) {
    const [user, setUser] = useState(null);
    useEffect(()=> {
        auth.onAuthStateChanged(async (user)=> {
            const { displayerName, email } = user;
            setUser({
                displayerName,
                email
            })
        })
    }, []);
    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}