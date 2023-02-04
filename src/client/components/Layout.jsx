import { motion } from "framer-motion"

export const Layout = ({ children }) => {
    const layoutVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    }
    
    return <motion.div {...layoutVariants} className="flex flex-col justify-center items-center min-w-screen w-full min-h-screen h-screen gap-1" >{ children }</motion.div>
}