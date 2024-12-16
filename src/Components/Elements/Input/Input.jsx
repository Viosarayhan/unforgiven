const Input = (props) => {
    const { type = "text", placeholder, name, classname } = props;
    return (
        <input 
        type= {type} 
        className={`text-sm border border-black font-sans rounded-md w-full ${classname} py-2 px-3 text-black`}
        placeholder= {placeholder}
        name= {name}
        />
    )
}

export default Input