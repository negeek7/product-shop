import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './NavBar'
import Login from './pages/Login'
import Cart from './pages/Cart'

function App() {

  return (
    <>
    <BrowserRouter >
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
