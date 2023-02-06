import { toast } from "react-hot-toast"

export const notification = (text, type="success") => {
    const styles = { duration: 4000, position: 'bottom-right' }

    if(type === "success") toast.success(text, styles)
    if(type === "error") toast.error(text, styles)
}