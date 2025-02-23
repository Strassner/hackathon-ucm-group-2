import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './Style.css'
import Login from './Login/Login'
import Home from './Home'
import Profile from './profile'
import Chat from './Chat/Chat'
import Swipe from './Swipe/Swipe'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/swipe" element={<Swipe />} />
    </Routes>
  )
}

export default App
