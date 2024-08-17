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
    <div className="mx-24 mt-8 border-2 border-cyan-600">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
