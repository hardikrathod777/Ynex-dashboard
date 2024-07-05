import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import store from './store'
import Dashboard from './Components/Dashboard/Dashboard'
function App() {

  return (
        <>
          <Header />
          <Navbar />
          <Routes store={store}>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </>
  )
}

export default App
