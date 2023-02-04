export const Input = ({ type="text", placeholder, id, label, onChange }) => {
    return <>
        {
            id && label
                &&
                <div className="flex flex-col gap-2">
                    <label htmlFor={id} className="font-bold text-primary-200">{label}</label>
                    <input type={type} placeholder={placeholder} id={id} onChange={onChange} className="text-primary-200 text-sm font-bold py-2 px-4 w-full bg-secondary-300 rounded-full border-none outline-none"/>
                 </div>
        }
    </>
}