import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './Register'
import Home from './Home'

function Router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Register/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router