import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './Style.css'
import Login from './Login/Login'
import Test from './Test'
import Home from './Home'
import Profile from './profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/test" element={<Test />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  )
}

export default App
