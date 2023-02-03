import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from "./views/Home"

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}