import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router } from "react-router-dom"

import { AnimatedRoutes } from "./AnimatedRoutes"

export const App = () => {
  useEffect(() => {
    const themeColor = window.localStorage.getItem("theme-color")

    if(themeColor === "dark") document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [])

  return (
    <>
      <Router>
        <AnimatedRoutes/>
        <Toaster/>
      </Router>
    </>
  )
}