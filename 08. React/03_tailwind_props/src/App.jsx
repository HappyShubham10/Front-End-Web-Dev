import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
    <Card username="Abhay" btntext="click me"/>
    <Card username="Rocky" btntext="visit me"/>
    </>
  )
}

export default App
