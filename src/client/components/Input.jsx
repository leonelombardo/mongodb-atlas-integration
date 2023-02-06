export const Input = ({ type="text", placeholder, name, id, label, value, onChange }) => {
    return <>
        {
            id && label
                &&
                <div className="flex flex-col gap-2">
                    <label htmlFor={id} className="font-bold text-primary-200">{label}</label>
                    <input type={type} placeholder={placeholder} name={name} id={id} value={value} onChange={onChange} className="text-primary-200 text-sm font-bold py-2 px-4 w-full bg-secondary-300 dark:bg-primary-400 rounded-full border-none outline-none placeholder:text-secondary-100 dark:placeholder:text-primary-200"/>
                 </div>
        }
    </>
}