import React from "react"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

import { Settings } from './Settings';
import { Home } from './Home';

export const Test = () => {

  // to be implemented in context
  const { state, dispatch } = useContext(UserContext)
  //const { state, dispatch } = useContext(UserContext);
  console.log(!state.user);
  const flag = !state.user;

  // const handelInput = (event) => {
  //     //setGreeting(event.target.value);
  //     dispatch({ type: "set_user", user: event.target.value })
  // }

  return (

    <div id="main">
      {flag ? (<h1>hi</h1>) : (<h1>hello</h1>)}
      <Settings />
      <Home />

    </div>
  )
}