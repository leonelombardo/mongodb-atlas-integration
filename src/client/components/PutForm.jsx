import { useState } from "react"
import { motion } from "framer-motion"

import { sendRequest } from "../services/sendRequest"
import { notification } from "../utils/notification"

import { Button } from "./Button"
import { Input } from "./Input"

export const PutForm = ({ title, variants }) => {
    const [ userId, setUserId ] = useState("")
    const [ userData, setUserData ] = useState({ first_name: "", last_name: "", email: "" })
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.clear()

        const hasEmptyFields = Object.values(userData).some(key => key === false || key === undefined || key === "")

        if(hasEmptyFields) return notification("Please fill all fields out.", "error")
        
        await sendRequest({ method: "put", id: userId, body: userData })
        
        setUserId("")
        setUserData({ first_name: "", last_name: "", email: "" })
    }

    const handleInput = (event) => {
        setUserData(previous => ({ ... previous, [event.target.name]: event.target.value }))
    }

    return <motion.form {...variants} onSubmit={handleSubmit} className="flex flex-col gap-4 overflow-hidden">
        <Input placeholder="6a398fwar83l4kazn34" label="ID" id="delete" value={userId} onChange={(event) => setUserId(event.target.value)}/>
        <div className="flex flex-col sm:flex-row gap-2">
            <Input placeholder="John" label="Name" name="first_name" id="put_name" value={userData.first_name} onChange={handleInput}/>  
            <Input placeholder="Doe" label="Surname" name="last_name" id="put_surname" value={userData.last_name} onChange={handleInput}/>  
        </div>
        <Input type="email" placeholder="johndoe@gmail.com" label="Email" name="email" id="put_email" value={userData.email} onChange={handleInput}/>
        <Button type="submit" size="sm">{title}</Button>
    </motion.form> 
}