import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { GoChevronDown } from "react-icons/go"

import { EndpointForm } from "./EndpointForm"

export const EndpointCard = ({ type="get", title, description }) => {
    const [ showForm, setShowForm ] = useState(false)

    const handleShowForm = () => {
        setShowForm(previous => !previous)
    }

    return (
        <>
            {
                title && description
                        && 
                    <div className="flex flex-col gap-4 max-w-[350px]">
                        <div className="flex justify-between items-center gap-6">
                            <div className="flex flex-col gap-2 max-w-[350px]">
                                <h1 className="text-xl text-primary-500 dark:text-secondary-500 font-bold">{title}</h1>
                                <p className="text-sm text-primary-200">{description}</p>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <button onClick={handleShowForm} className={`flex items-center text-2xl text-center text-primary-200 hover:text-primary-500 transition-[color, transform] duration-300 ${showForm && "rotate-180"}`}>
                                    <GoChevronDown/>
                                </button>
                            </div>
                        </div>
                        <AnimatePresence mode="wait">
                            {
                                showForm && <EndpointForm type={type} title={title}/>
                            }
                        </AnimatePresence>
                    </div>
            }
        </>
    )
}