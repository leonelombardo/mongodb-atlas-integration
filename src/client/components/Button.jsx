export const Button = ({ type="button", size="lg", onClick, children }) => {
    return <>
        {
         children && <button type={type} onClick={onClick} className={`py-2 px-4 bg-mongodb-500 rounded-full text-${size} text-secondary-500 font-${size !== "lg" ? "normal" : "bold"} min-w-[150px] w-full h-fit hover:brightness-125 transition-[filter] duration-300`}>{ children }</button>
        }
    </>
}