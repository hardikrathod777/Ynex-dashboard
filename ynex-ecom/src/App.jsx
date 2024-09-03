// import { Route, Router } from 'react-router-dom'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import store from './store'
import { useSelector } from 'react-redux'
import Singlepro from './Components/Singlepro/Singlepro'
// import store from './store'

function App() {
  const isLogin = useSelector(state => state.authReducer.isLogin);
  return (
    <>
      <Header />
      <Routes store={store}>
        <Route path='/' element={isLogin ? <Home /> : <Navigate to="/signin" />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/productdetail' element={<Singlepro/>} /> 
      </Routes>
    </>
  )
}

export default App
