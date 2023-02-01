import React from 'react'
import '../styles/App.css';
import { Wrapper } from '../context/userContext';
import { Settings } from './Settings';
import { Home } from './Home';
import { createContext, useContext } from 'react';
import { UserContext } from "../context/userContext"
import {Test} from './Test'

const App = () => {
  //const { state, dispatch } = useContext(UserContext);
  //console.log(state);
  return (
    <Wrapper>
      {/* {!state ? (<h1>hi</h1>) : ( */}
      <Test />
      
      {/* )} */}

    </Wrapper>
  )
}


export default App;
