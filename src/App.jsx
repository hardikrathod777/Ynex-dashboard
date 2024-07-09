import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import store from './store';
import Dashboard from './Components/Dashboard/Dashboard';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
function App() {

  return (
        <>
          <Header />
          <Navbar />
          <Routes store={store}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin/>} />
          </Routes>
        </>
  )
}

export default App
