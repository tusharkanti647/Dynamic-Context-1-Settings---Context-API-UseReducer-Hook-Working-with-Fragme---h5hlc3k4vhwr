import React, { useState, createContext } from "react";


const UserContext = createContext()

const Wrapper = (props) => {
    const [greeting, setGreeting] = useState("Hello");



    return (
        <UserContext.Provider value={{ greeting, setGreeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }