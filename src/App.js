import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Table from "./pages/Table";
import Form from "./pages/Form"
import Nav from './component/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/add' element={<Form/>}/>
        <Route path='/view' element={<Table/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App