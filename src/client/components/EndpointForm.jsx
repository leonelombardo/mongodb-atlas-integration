import { GetForm } from "./GetForm"
import { DeleteForm } from "./DeleteForm"
import { PostForm } from "./PostForm"
import { PutForm } from "./PutForm"

export const EndpointForm = ({ method="get", title }) => {
    const formVariants = {
        initial: {
            height: 0,
            opacity: 0,
            transition: {
                height: {
                    duration: 0.25
                },
                opacity: {
                    duration: 0.35
                }
            }
        },
        animate: {
            height: "auto",
            opacity: 1,
            transition: {
                height: {
                    duration: 0.25
                },
                opacity: {
                    duration: 0.35
                }
            }
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: {
                height: {
                    duration: 0.25
                },
                opacity: {
                    duration: 0.35
                }
            }
        }
    }

    return (
        <>
            {
                method === "get" && <GetForm title={title} variants={formVariants}/>
            }
            {
                method === "delete" && <DeleteForm title={title} variants={formVariants}/>
            }
            {
                method === "post" && <PostForm title={title} variants={formVariants}/>
            }
            {
                method === "put" && <PutForm title={title} variants={formVariants}/>
            }
        </>
    )
}