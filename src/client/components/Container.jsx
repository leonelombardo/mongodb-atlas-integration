export const Container = ({ style, children }) => {
    return <div className={`max-w-[1000px] w-full flex flex-col justify-between items-center h-full bg-transparent ${style}`}>{ children }</div>
}