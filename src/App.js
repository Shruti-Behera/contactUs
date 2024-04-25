import React from 'react'
import NavMenu from './component/Navmenu/NavMenu'
import Home from './component/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './component/ContactPage/Contact';
import Footer from './component/Footer/Footer';
import CrudFrorm from './component/CrudForm/CrudFrorm';



const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavMenu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/crudForm/*' element={<CrudFrorm/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  
  
    </>
  )
}

export default App
