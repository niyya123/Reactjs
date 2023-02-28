import React from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from '../Pages/Home'
import Gallery from '../Pages/Gallery'
import Post from '../Pages/Post'
import About from '../Pages/About'
import SignUp from '../Pages/SignUp'
import Detail from '../Pages/Detail'
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <div>   
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/post" element={<Post/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/detail" element={<Detail/>} />
        </Routes>
        </AnimatePresence>   
</div>
  )
}

export default AnimatedRoutes