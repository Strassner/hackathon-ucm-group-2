import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './Style.css'
import Login from './Login/Login'
import Home from './Home'
import Chat from './Chat'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
