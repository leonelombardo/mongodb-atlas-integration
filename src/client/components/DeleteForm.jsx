import { useState } from "react"
import { motion } from "framer-motion"

import { sendRequest } from "../services/sendRequest"
import { notification } from "../utils/notification"

import { Button } from "./Button"
import { Input } from "./Input"

export const DeleteForm = ({ title, variants }) => {
    const [ userId, setUserId ] = useState("") 

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.clear()

        if(!userId.trim()) return notification("Provide an ID before send a request.", "error")

        await sendRequest({ method: "delete", id: userId })

        setUserId("")
    }

    const handleInput = (event) => {
        setUserId(event.target.value)
    }

    return <motion.form {...variants} onSubmit={handleSubmit} className="flex flex-col gap-4 overflow-hidden">
        <Input placeholder="6a398fwar83l4kazn34" label="ID" id="delete" value={userId} onChange={handleInput}/>
        <Button type="submit" size="sm">{title}</Button>
    </motion.form>
}