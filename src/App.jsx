import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import store from './store';
import Dashboard from './Components/Dashboard/Dashboard';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import Addproduct from './Components/Addproduct/Addproduct';
import Editproduct from './Components/Editproduct/Editproduct';
import Productlist from './Components/Productlist/Productlist';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import {siginCom} from './services/actions/authActions'
// import { auth } from './firebaseConfig';
// import ProtectedRoute from './Components/ProtectedRoute.js';
function App() {
  const isLogin = useSelector(state => state.authReducer.isLogin);
  return (
        <>
          <Header />
          <Navbar />
          <Routes store={store}>
            <Route path='/' element={isLogin ? <Dashboard /> : <Navigate to="/signin" />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/addproduct' element={<Addproduct/>}/>
            <Route path='/editproduct/:id' element={<Editproduct/>} />
            <Route path='/Productlist' element={<Productlist/>} />
          </Routes>
        </>
  )
}

export default App
