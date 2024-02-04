import React, { useState } from 'react'
import Wordcontext from './Wordcontext';

export default function Wordstates(props) {
    const [word, setWord] = useState("");
  return (
    <Wordcontext.Provider value={{word, setWord}}>
        {props.children}
    </Wordcontext.Provider>
  )
}
