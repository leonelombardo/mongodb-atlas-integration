import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { Home } from "./views/Home"
import { Admin } from "./views/Admin"

export const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    </AnimatePresence>
  )
}