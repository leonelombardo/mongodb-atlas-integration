import { Link } from "react-router-dom"

export const Navbar = () => {
    const switchTheme = () => {
        const darkMode = document.documentElement.classList.contains("dark")
        
        if(darkMode) document.documentElement.classList.remove("dark")
        else document.documentElement.classList.add("dark")

        window.localStorage.setItem("theme-color", darkMode ? "light" : "dark")
    }

    return <nav className="flex justify-between items-center w-full p-6">
        <Link to="/">
            <img src="./src/public/mongodb-atlas-logo.svg" className="w-[100px]"/>
        </Link>
        <button onClick={switchTheme} className="flex w-[60px] h-[30px] bg-secondary-300 dark:bg-primary-300 rounded-full">
            <div className={`w-[30px] h-full bg-secondary-400 dark:bg-primary-400 shadow-sm shadow-secondary-200 dark:shadow-primary-200 rounded-full dark:translate-x-[30px] transition-[transform] duration-300`}></div>
        </button>
    </nav>
}