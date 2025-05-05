import { createContext, useEffect, useReducer } from "react";
import {createAction} from '../utils/reducer/reducter.utils'

// old import if looking at useState
//import { createContext, useState, useEffect, useReducer } from "react"

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";


// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
    'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    
    const { currentUser } = state;

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }

    const value = {
        currentUser,
        setCurrentUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

/* 

const userReducer = (state, action) -> {
    return {
        currentUser: 
    }
}

*/