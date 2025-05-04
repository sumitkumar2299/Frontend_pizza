
import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './Pages/Home'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/NotFound'
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/AddProduct'
import ProductDetails from './Pages/Products/ProductDetails'
import CartDetails from './Pages/Cart/CartDetails'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/denied' element = {<Denied/>}/>
        <Route path='/auth/signup' element = {<Signup/>}/>
        <Route path='/auth/login' element = {<Login/>}/>
        <Route path='/admin/addProduct'element={<AddProduct/>}/>
        <Route path='/product/:productId'element= {<ProductDetails/>}/>
        <Route path='/cart'element= {<CartDetails/>}/>

        <Route path='*' element = {<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App
