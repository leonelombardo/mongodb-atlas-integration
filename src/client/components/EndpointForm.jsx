import { motion } from "framer-motion"

import { Button } from "./Button"
import { Input } from "./Input"

export const EndpointForm = ({ type="get", title }) => {
    const formVariants = {
        initial: {
            height: 0,
            opacity: 0
        },
        animate: {
            height: "auto",
            opacity: 1
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: {
                opacity: {
                    duration: 0.1
                }
            }
        }
    }

    return (
        <>
        
            {
                type === "get" && 
                    <motion.form {...formVariants} className="flex flex-col gap-4">
                        <Button type="submit" size="sm">{title}</Button>
                    </motion.form>
            }
            {
                type === "post" && 
                    <motion.form {...formVariants} className="flex flex-col gap-4">
                        <Input placeholder="6a398fwar83l4kazn34" label="ID" id="put"/>  
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input placeholder="John" label="Name" id="put_name"/>  
                            <Input placeholder="Doe" label="Surname" id="put_surname"/>  
                        </div>
                        <Input type="email" placeholder="johndoe@gmail.com" label="Email" id="put_email"/>
                        <Button type="submit" size="sm">{title}</Button>  
                    </motion.form> 
            }
            {
                type === "put" &&
                    <motion.form {...formVariants} className="flex flex-col gap-4">
                        <Input placeholder="6a398fwar83l4kazn34" label="ID" id="put"/>  
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input placeholder="John" label="Name" id="put_name"/>  
                            <Input placeholder="Doe" label="Surname" id="put_surname"/>  
                        </div>
                        <Input type="email" placeholder="johndoe@gmail.com" label="Email" id="put_email"/>
                        <Button type="submit" size="sm">{title}</Button>
                    </motion.form> 
            }
            {
                type === "delete" && 
                    <motion.form {...formVariants} className="flex flex-col gap-4">
                        <Input placeholder="6a398fwar83l4kazn34" label="ID" id="delete"/>
                        <Button type="submit" size="sm">{title}</Button>
                    </motion.form>
            }
        </>
    )
}