import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import Products from './pages/Products';
import Productdetail from './pages/Productdetail'
import SignIn from './pages/SignIn'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/product" element={<Products />} />
          <Route path="/product/:name" element={<Productdetail />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App