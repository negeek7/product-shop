import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './NavBar'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Product from './pages/Product'

function App() {

  return (
    <>
    <BrowserRouter >
    <div className="flex flex-col gap-8 min-h-screen">
      <NavBar />
      <div className="mx-24 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
