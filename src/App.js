import React from 'react'
import NavMenu from './component/Navmenu/NavMenu'
import Home from './component/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './component/ContactPage/Contact';
import Footer from './component/Footer/Footer';
import CrudFrorm from './component/CrudForm/CrudFrorm';
import CounterFile from './component/CounterFile/CounterFile';
import CardDataShow from './component/CardDataShow/CardDataShow';
import ApiIntegration from './component/ApiIntegration/ApiIntegration';
import SingleProductView from './component/SingleProductView/SingleProductView';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavMenu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/crudForm/*' element={<CrudFrorm/>}/>
        <Route path='/counter' element={<CounterFile/>}/>
        <Route path='/cardData' element={<CardDataShow/>}/>
        <Route path='/product' element={<ApiIntegration />}/>
        <Route path="/productDetail/:id" element={<SingleProductView/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  
  
    </>
  )
}

export default App
