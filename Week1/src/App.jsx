import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import upper, {text1,text2, text3} from "./file1";
import obj from "./file2";
import { males, females } from "./file2";


function App() {

  
  const {firstName, email} = obj;
  let text1test = text1;
  let text2test = text2;
  let text3test = text3;
  const arr = [...males, ...females];
  const arr2 = [...arr]
  arr2.push("Helle", "Tina");
  return (
    <>
    <h1>Exercises 0</h1>
    <h2>ex 1</h2>
    <p>{upper(text1test)}</p>
    <p>{upper(text2test)}</p>
    <p>{upper(text3test)}</p>

    <h2>ex 2</h2>
    <p>{firstName},{email}</p>
    <p>{arr}</p>
    <p>{arr2}</p>


    <h1>Exercises 1</h1>
    






    </>
  )
}

export default App
