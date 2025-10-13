import React, { createContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { data } from 'react-router-dom'
export const UserContext = createContext(0)



export function UserContextProvider(props) {
    let [user, setUser] = useState(null)
    async function signUp(email, password) {

        let { data, error } = await supabase.auth.signUp({
            email,
            password
        })
        if (error) throw error;
        console.log(data)
        return data;
    }
    async function logIn(email, password) {

        let { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        setUser(data.user);
        return data;

    }
    async function logOut() {

        let { error } = await supabase.auth.signOut()
        setUser(null)


    }
    useEffect(() => {
        //Obtaining session info
        const session = supabase.auth.getSession().then(({ data }) => {
            if (data.session) {
                setUser(data.session.user);
            }
        })
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user|| null) {
                setUser(session.user);
            } else {
                setUser(null);
            }
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, [])
    return (
        <UserContext.Provider value={{ user,logIn,logOut,signUp,setUser }}>
            {props.children}
        </UserContext.Provider>


    )
}
