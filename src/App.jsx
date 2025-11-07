import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProdctCard from './componants/ProductCard'
import Test from './componants/test'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import homePage from './componants/pages/homePage'
import loginPage from './componants/pages/loginPage'
import registerPage from './componants/pages/registerPage'
import RegisterPage from './pages/registerPage'
import HomePage from './componants/pages/homePage'
import LoginPage from './pages/loginPage'
import AdminPage from './pages/adminPage'

function App() {
  return (

    <BrowserRouter>
        <div className='w-full h-screen bg-red-700'>
          <Routes>
              <Route path='/'element={HomePage}/>
              <Route path='/login'element={LoginPage}/>
              <Route path='/register'element={RegisterPage}/>
              <Route path='/admin' element={AdminPage}/>

          </Routes>

        </div>
    </BrowserRouter>
  );
}

export default App;
