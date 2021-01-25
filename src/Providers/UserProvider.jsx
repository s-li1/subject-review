import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../Config/Firebase/firebase';
export const UserContext = createContext ({ currentUser: null });

export default function UserProvider(props) {
    const [user, setUser] = useState(null);
    useEffect(()=> {
        auth.onAuthStateChanged(async (user)=> {
            setUser(user);
        });
    }, []);
    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}