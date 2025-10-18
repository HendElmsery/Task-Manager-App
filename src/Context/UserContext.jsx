import React, { createContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { data } from 'react-router-dom'
export const UserContext = createContext(0)



export function UserContextProvider(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // prevent flash before session loads
  
    async function signUp(email, password) {

        let { data, error } = await supabase.auth.signUp({
            email,
            password
        })
        if (error) throw error;
        console.log(data)
        return data;
    }
    useEffect(() => {
        const getSession = async () => {
          const { data, error } = await supabase.auth.getSession();
          if (data?.session?.user) {
            setUser(data.session.user);
          }
          setLoading(false);
        };
    
        getSession();
    
        const { data: listener } = supabase.auth.onAuthStateChange(
          (_event, session) => {
            setUser(session?.user ?? null);
          }
        );
    
        return () => {
          listener.subscription.unsubscribe();
        };
      }, []);
    

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



    return (
        <UserContext.Provider value={{ user, logIn, logOut, signUp, setUser }}>
                {!loading && props.children}

        </UserContext.Provider>


    )
}
