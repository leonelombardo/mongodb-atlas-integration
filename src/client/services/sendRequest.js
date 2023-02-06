import { notification } from "../utils/notification"

export const sendRequest = async ({ method, id, body }) => {
    console.clear()
    const options = { method }
    
    if(method === "post" || method === "put"){
        options.headers = { "Content-Type": "application/json" },
        options.body = JSON.stringify(body)
    }
    
    try{        
        const response = await fetch(`/api/users/${ id || "" }`, options)
        const data = await response.json()
        
        if(!data.ok) return notification("This request failed, try again later.", "error")
        
        console.log(data)
        notification("Request response sent to console (F12).")
    }catch(error){
        console.error(error)
        notification("Internal server error. Please check console for more information.", "error")
    }
}