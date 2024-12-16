import Label from "./Label";
import Input from "./Input";
const InputForm = (props) => {
    const { title, name, placeholder, type, classname, classname2 } = props
    return (
        <div className={`mb-6 font-sans ${ classname }`}>
            <Label htmlFor={name}>{title}</Label>
            <Input name={name} type={type} placeholder={placeholder} classname={ classname2}/>
        </div>
    );
}

export default InputForm