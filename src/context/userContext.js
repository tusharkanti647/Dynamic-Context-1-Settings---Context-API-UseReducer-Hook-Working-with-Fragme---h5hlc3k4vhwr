import React, { useState, createContext, useReducer } from "react";

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case "set_user": {

            return {
                ...state,
                user: action.user,

            }
        }
        default: return state;
    }
}


const UserContext = createContext()

const Wrapper = (props) => {

    const initialState = {
        user: null,
    }

    const [greeting, setGreeting] = useState("hello");
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }