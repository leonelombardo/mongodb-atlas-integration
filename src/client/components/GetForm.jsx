import { motion } from "framer-motion"

import { sendRequest } from "../services/sendRequest"

import { Button } from "./Button"

export const GetForm = ({ title, variants }) => {
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        await sendRequest({ method: "get" })
    }

    return <motion.form {...variants} onSubmit={handleSubmit} className="flex flex-col gap-4 overflow-hidden">
        <Button type="submit" size="sm">{title}</Button>
    </motion.form>
}