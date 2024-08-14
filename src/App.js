import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home.js";
import Edit from "./pages/Edit/Edit.js";
import Table from "./pages/Table/Table.js";
import Form from "./pages/Form/Form.js"
import Nav from './component/Navbar/Nav.js';

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