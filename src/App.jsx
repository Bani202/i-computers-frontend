import { useState } from 'react';
import './App.css';
import Test from './componants/test';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import AdminPage from './pages/adminPage';
import RegisterPage from'./pages/registerPage';

function App() {
  return (

    <BrowserRouter>
        <div className='w-full h-screen'>
          <Routes path='/'>
              <Route path='/'element={<HomePage/>}/>
              <Route path='/login'element={<LoginPage/>}/>
              <Route path='/register'element={<RegisterPage/>}/>
              <Route path='/admin/*' element={<AdminPage/>}/>

          </Routes>

        </div>
    </BrowserRouter>
  );
}

export default App;
