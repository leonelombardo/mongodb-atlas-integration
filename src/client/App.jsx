import { BrowserRouter as Router } from "react-router-dom"

import { AnimatedRoutes } from "./AnimatedRoutes"

export const App = () => {
  return (
    <>
      <Router>
        <AnimatedRoutes/>
      </Router>
    </>
  )
}